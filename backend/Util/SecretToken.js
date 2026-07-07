import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

if (!process.env.TOKEN_KEY) {
  throw new Error("TOKEN_KEY is missing in .env");
}

export const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: "3d",
  });
};
