import { model } from "mongoose";

import {PositionsSchema} from "../schemas/PostionsSchema.js";

export const PositionsModel = model("position", PositionsSchema);