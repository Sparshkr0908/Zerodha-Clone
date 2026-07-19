import { Router } from "express";
import { newOrder, getAllOrders } from "../Controller/OrderController.js";

const router = Router();

router.post("/newOrder", newOrder);
router.get("/allOrders", getAllOrders);

export default router;