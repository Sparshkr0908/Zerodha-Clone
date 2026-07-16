import { model } from "mongoose";

import {OrdersSchema} from "../schemas/OrdersSchema.js"

export const OrdersModel = new model("Order", OrdersSchema);