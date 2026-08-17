import { Schema } from "mongoose";

export const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    prices: Number,
    total: Number,
    mode: String,
    product: String,
});
