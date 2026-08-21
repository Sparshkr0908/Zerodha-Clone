import { Router } from "express";
import { getWallet, addFunds } from "../Controller/FundsController.js";

const router = Router();

router.get("/wallet", getWallet);
router.post("/addFunds", addFunds);

export default router;