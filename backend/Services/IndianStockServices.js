import axios from "axios";

const BASE_URL = "https://stock.indianapi.in";
const KEY = process.env.INDIAN_STOCK_API_KEY;

const client = axios.create({
  baseURL: BASE_URL,
  headers: { "X-Api-Key": KEY },
});

const cache = new Map();
const CACHE_TTL = 60 * 1000; 

const getCached = async (cacheKey, fetchFn) => {
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  const data = await fetchFn();
  cache.set(cacheKey, { data, timestamp: Date.now() });
  return data;
};

// Get single stock data by company name
export const getStockByName = async (name) => {
  return getCached(`stock:${name}`, async () => {
    const res = await client.get("/stock", { params: { name } });
    return res.data;
  });
};

// Get NSE most active stocks (bulk, good for watchlist)
export const getNSEMostActive = async () => {
  return getCached("nse_most_active", async () => {
    const res = await client.get("/NSE_most_active");
    return res.data;
  });
};

// Get trending stocks (gainers/losers)
export const getTrendingStocks = async () => {
  return getCached("trending", async () => {
    const res = await client.get("/trending");
    return res.data;
  });
};