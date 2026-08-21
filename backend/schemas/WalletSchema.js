import { Schema } from "mongoose";

export const WalletSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  balance: { type: Number, default: 0 },
  transactions: [
    {
      type: { type: String, enum: ["CREDIT", "DEBIT"] },
      amount: Number,
      reason: String, // "Added via UPI", "Stock Buy - TATASTEEL", etc.
      date: { type: Date, default: Date.now },
    },
  ],
});