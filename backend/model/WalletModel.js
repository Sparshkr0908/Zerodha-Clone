import { model } from "mongoose";
import { WalletSchema } from "../schemas/WalletSchema.js";

export const WalletModel = model("wallet", WalletSchema);