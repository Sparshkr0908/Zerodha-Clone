import { OrdersModel } from "../model/OrdersModel.js";
import { HoldingsModel } from "../model/HoldingsModel.js";
import { PositionsModel } from "../model/PositionsModel.js";
import { getStockByName } from "../services/indianStockServices.js";
import { getOrCreateWallet } from "../util/wallet.js";

const isMarketOpen = () => {
  const now = new Date();
  const istString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  const istDate = new Date(istString);
  const totalMinutes = istDate.getHours() * 60 + istDate.getMinutes();
  return totalMinutes >= 5 * 60 && totalMinutes < 23 * 60; //for game experience its between 5am to 11pm
};

export const newOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const { name, qty, price, mode, product } = req.body;
    const orderProduct = product === "MIS" ? "MIS" : "CNC";

    if (!name || !mode || qty == null || Number(qty) <= 0) {
      return res.status(400).json({
        success: false,
        message: "name, qty, and mode are required and qty must be greater than 0",
      });
    }

    if (!isMarketOpen()) {
      return res.status(403).json({
        success: false,
        message: "Market is closed. Trading is allowed only between 05:00 AM and 11:00 PM IST.",
      });
    }

    const numericQty = Number(qty);

    const stockData = await getStockByName(name);
    const livePrice = Number(
      stockData?.currentPrice?.NSE ??
        stockData?.currentPrice?.BSE ??
        stockData?.stockDetailsReusableData?.price,
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

      const wallet = await getOrCreateWallet(userId);
      if (wallet.balance < total) {
        return res.status(400).json({
          success: false,
          message: `Insufficient funds. Required ₹${total.toFixed(2)}, available ₹${wallet.balance.toFixed(2)}`,
        });
      }

      wallet.balance -= total;
      wallet.transactions.unshift({ type: "DEBIT", amount: total, reason: `Stock Buy - ${name}` });
      await wallet.save();

      const order = await OrdersModel.create({
        userId, name, qty: numericQty, prices: executionPrice, total, mode, product: orderProduct,
      });

      if (orderProduct === "MIS") {
        await updatePositionOnBuy(userId, name, numericQty, executionPrice);
      } else {
        await updateHoldingsOnBuy(userId, name, numericQty, executionPrice);
      }

      return res.status(201).json({
        success: true,
        message: `${orderProduct === "MIS" ? "Intraday" : "Delivery"} buy order executed successfully`,
        order,
      });
    }

    // ---------------- SELL ----------------
    if (mode === "SELL") {
      const executionPrice = livePrice;
      const total = numericQty * executionPrice;

      let pnlResult;
      try {
        pnlResult =
          orderProduct === "MIS"
            ? await updatePositionOnSell(userId, name, numericQty, executionPrice)
            : await updateHoldingsOnSell(userId, name, numericQty, executionPrice);
      } catch (sellErr) {
        return res.status(400).json({ success: false, message: sellErr.message });
      }

      const order = await OrdersModel.create({
        userId, name, qty: numericQty, prices: executionPrice, total, mode, product: orderProduct,
      });

      const wallet = await getOrCreateWallet(userId);
      wallet.balance += total;
      wallet.transactions.unshift({ type: "CREDIT", amount: total, reason: `Stock Sell - ${name}` });
      await wallet.save();

      const { profitOrLoss, isProfit } = pnlResult;
      return res.status(201).json({
        success: true,
        message: `Sell order executed. ${isProfit ? "Profit" : "Loss"} of ₹${Math.abs(profitOrLoss).toFixed(2)}`,
        order,
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
const updateHoldingsOnBuy = async (userId, name, qty, price) => {
  const existing = await HoldingsModel.findOne({ userId, name });
  if (existing) {
    const newQty = existing.qty + qty;
    existing.avg = (existing.qty * existing.avg + qty * price) / newQty;
    existing.qty = newQty;
    existing.price = price;
    await existing.save();
  } else {
    await HoldingsModel.create({ userId, name, qty, avg: price, price, net: "0%", day: "0%" });
  }
};

const updateHoldingsOnSell = async (userId, name, qty, price) => {
  const existing = await HoldingsModel.findOne({ userId, name });
  if (!existing || existing.qty < qty) throw new Error("Insufficient holdings to sell");

  const profitOrLoss = (price - existing.avg) * qty;
  existing.qty -= qty;
  existing.price = price;
  if (existing.qty === 0) await HoldingsModel.deleteOne({ userId, name });
  else await existing.save();
  return { profitOrLoss, isProfit: profitOrLoss >= 0 };
};

// ---------------- Positions (MIS / Intraday) ----------------
const updatePositionOnBuy = async (userId, name, qty, price) => {
  const existing = await PositionsModel.findOne({ userId, name });
  if (existing) {
    const newQty = existing.qty + qty;
    existing.avg = (existing.qty * existing.avg + qty * price) / newQty;
    existing.qty = newQty;
    existing.price = price;
    await existing.save();
  } else {
    await PositionsModel.create({
      userId, product: "MIS", name, qty, avg: price, price, net: "0%", day: "0%", isLoss: false,
    });
  }
};

const updatePositionOnSell = async (userId, name, qty, price) => {
  const existing = await PositionsModel.findOne({ userId, name });
  if (!existing || existing.qty < qty) throw new Error("Insufficient position quantity to sell");

  const profitOrLoss = (price - existing.avg) * qty;
  existing.qty -= qty;
  existing.price = price;
  if (existing.qty === 0) await PositionsModel.deleteOne({ userId, name });
  else await existing.save();
  return { profitOrLoss, isProfit: profitOrLoss >= 0 };
};

// ---------------- Reads (all scoped to the logged-in user) ----------------
export const getAllOrders = async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userId: req.userId }).sort({ createdAt: -1 });
    return res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getAllHoldings = async (req, res) => {
  try {
    return res.json(await HoldingsModel.find({ userId: req.userId }));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getAllPositions = async (req, res) => {
  try {
    return res.json(await PositionsModel.find({ userId: req.userId }));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};