import mongoose from "mongoose";
import { userSchema } from "../schemas/frontendSignupSchema.js";

export const User = mongoose.model("User", userSchema);
export default User;