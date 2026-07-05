import User from "../Model/frontendSignupModel.js";
import { config } from "dotenv";
config();
import jwt from "jsonwebtoken";

export const userVerification = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    }

    try {
      const user = await User.findById(data.id);

      if (user) {
        return res.json({
          status: true,
          user: user.username,
        });
      }

      return res.json({ status: false });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: false });
    }
  });
};