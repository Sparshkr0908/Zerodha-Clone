import { Router } from "express";
import { Signup, Login } from "../Controller/AuthController.js";
import { userVerification } from "../Middleware/authMiddleware.js";
const router = Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/',userVerification)

export default router;