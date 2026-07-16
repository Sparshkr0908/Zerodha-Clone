import { Router } from "express";
import { getStockData, getWatchlistData } from "../Controller/MarketController.js";

const router = Router();

router.get("/stockData", getStockData);       
router.get("/watchlistData", getWatchlistData); 

export default router;