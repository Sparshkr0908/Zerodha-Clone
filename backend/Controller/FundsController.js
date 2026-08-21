import { WalletModel } from "../model/WalletModel.js";

export const getWallet = async (req, res) => {
  try {
    const userId = req.cookies.token ? "default_user" : null; 

    let wallet = await WalletModel.findOne({ userId: "default_user" });
    if (!wallet) {
      wallet = await WalletModel.create({ userId: "default_user", balance: 0, transactions: [] });
    }
    return res.status(200).json({ success: true, wallet });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const addFunds = async (req, res) => {
  try {
    const { amount, method } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, message: "Enter a valid amount" });
    }

    let wallet = await WalletModel.findOne({ userId: "default_user" });
    if (!wallet) {
      wallet = await WalletModel.create({ userId: "default_user", balance: 0, transactions: [] });
    }

    wallet.balance += Number(amount);
    wallet.transactions.unshift({
      type: "CREDIT",
      amount: Number(amount),
      reason: `Added via ${method || "UPI"}`,
    });

    await wallet.save();

    return res.status(200).json({
      success: true,
      message: `₹${amount} added successfully`,
      wallet,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};