import { getStockByName, getNSEMostActive, getTrendingStocks } from "../services/indianStockServices.js";

export const getStockData = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ success: false, message: "name query param required" });
    }
    const data = await getStockByName(name);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({ success: false, message: "Failed to fetch stock data" });
  }
};

export const getWatchlistData = async (req, res) => {
  try {
    const data = await getNSEMostActive();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({ success: false, message: "Failed to fetch watchlist data" });
  }
};