import { model } from "mongoose";

import {OrderSchema} from "../schemas/OrdersSchema.js"

export const OrdersModel = new model("Order", OrdersSchema);