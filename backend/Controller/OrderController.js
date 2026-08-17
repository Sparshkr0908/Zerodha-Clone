import { OrdersModel } from "../model/OrdersModel.js";
import { HoldingsModel } from "../model/HoldingsModel.js";
import { PositionsModel } from "../model/PositionsModel.js";
import { getStockByName } from "../services/indianStockServices.js";

const isMarketOpen = () => {
  const now = new Date();
  const istString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  const istDate = new Date(istString);
  const totalMinutes = istDate.getHours() * 60 + istDate.getMinutes();
  return totalMinutes >= 10 * 60 && totalMinutes < 17 * 60;
};

export const newOrder = async (req, res) => {
  try {
    const { name, qty, price, mode, product } = req.body;
    const orderProduct = product === "MIS" ? "MIS" : "CNC"; // default CNC

    if (!name || !mode || qty == null || Number(qty) <= 0) {
      return res.status(400).json({
        success: false,
        message: "name, qty, and mode are required and qty must be greater than 0",
      });
    }

    if (!isMarketOpen()) {
      return res.status(403).json({
        success: false,
        message: "Market is closed. Trading is allowed only between 10:00 AM and 5:00 PM IST.",
      });
    }

    const numericQty = Number(qty);

    const stockData = await getStockByName(name);
    const livePrice = Number(
      stockData?.currentPrice?.NSE ??
      stockData?.currentPrice?.BSE ??
      stockData?.stockDetailsReusableData?.price
    );

    if (!livePrice || isNaN(livePrice)) {
      return res.status(502).json({
        success: false,
        message: "Could not fetch live price for this stock. Try again.",
      });
    }

    // ---------------- BUY ----------------
    if (mode === "BUY") {
      const offeredPrice = Number(price);
      if (!offeredPrice || offeredPrice < livePrice) {
        return res.status(400).json({ success: false, message: "Insufficient balance" });
      }

      const executionPrice = livePrice;
      const total = numericQty * executionPrice;

      const newOrder = new OrdersModel({
        name, qty: numericQty, prices: executionPrice, total, mode, product: orderProduct,
      });
      await newOrder.save();

      if (orderProduct === "MIS") {
        await updatePositionOnBuy(name, numericQty, executionPrice);
      } else {
        await updateHoldingsOnBuy(name, numericQty, executionPrice);
      }

      return res.status(201).json({
        success: true,
        message: `${orderProduct === "MIS" ? "Intraday" : "Delivery"} buy order executed successfully`,
        order: newOrder,
      });
    }

    // ---------------- SELL ----------------
    if (mode === "SELL") {
      const executionPrice = livePrice;
      const total = numericQty * executionPrice;

      let pnlResult;
      try {
        if (orderProduct === "MIS") {
          pnlResult = await updatePositionOnSell(name, numericQty, executionPrice);
        } else {
          pnlResult = await updateHoldingsOnSell(name, numericQty, executionPrice);
        }
      } catch (sellErr) {
        return res.status(400).json({ success: false, message: sellErr.message });
      }

      const newOrder = new OrdersModel({
        name, qty: numericQty, prices: executionPrice, total, mode, product: orderProduct,
      });
      await newOrder.save();

      const { profitOrLoss, isProfit } = pnlResult;

      return res.status(201).json({
        success: true,
        message: `Sell order executed. ${isProfit ? "Profit" : "Loss"} of ₹${Math.abs(profitOrLoss).toFixed(2)}`,
        order: newOrder,
        profitOrLoss,
        isProfit,
      });
    }

    return res.status(400).json({ success: false, message: "Invalid mode" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// ---------------- Holdings (CNC / Delivery) ----------------
const updateHoldingsOnBuy = async (name, qty, price) => {
  const existing = await HoldingsModel.findOne({ name });
  if (existing) {
    const totalOldValue = existing.qty * existing.avg;
    const totalNewValue = qty * price;
    const newQty = existing.qty + qty;
    existing.qty = newQty;
    existing.avg = (totalOldValue + totalNewValue) / newQty;
    existing.price = price;
    await existing.save();
  } else {
    await HoldingsModel.create({ name, qty, avg: price, price, net: "0%", day: "0%" });
  }
};

const updateHoldingsOnSell = async (name, qty, price) => {
  const existing = await HoldingsModel.findOne({ name });
  if (!existing || existing.qty < qty) {
    throw new Error("Insufficient holdings to sell");
  }
  const profitOrLoss = (price - existing.avg) * qty;
  const isProfit = profitOrLoss >= 0;

  existing.qty -= qty;
  existing.price = price;
  if (existing.qty === 0) {
    await HoldingsModel.deleteOne({ name });
  } else {
    await existing.save();
  }
  return { profitOrLoss, isProfit };
};

// ---------------- Positions (MIS / Intraday) ----------------
const updatePositionOnBuy = async (name, qty, price) => {
  const existing = await PositionsModel.findOne({ name });
  if (existing) {
    const totalOldValue = existing.qty * existing.avg;
    const totalNewValue = qty * price;
    const newQty = existing.qty + qty;
    existing.qty = newQty;
    existing.avg = (totalOldValue + totalNewValue) / newQty;
    existing.price = price;
    await existing.save();
  } else {
    await PositionsModel.create({
      product: "MIS", name, qty, avg: price, price, net: "0%", day: "0%", isLoss: false,
    });
  }
};

const updatePositionOnSell = async (name, qty, price) => {
  const existing = await PositionsModel.findOne({ name });
  if (!existing || existing.qty < qty) {
    throw new Error("Insufficient position quantity to sell");
  }
  const profitOrLoss = (price - existing.avg) * qty;
  const isProfit = profitOrLoss >= 0;

  existing.qty -= qty;
  existing.price = price;
  if (existing.qty === 0) {
    await PositionsModel.deleteOne({ name });
  } else {
    await existing.save();
  }
  return { profitOrLoss, isProfit };
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    return res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};