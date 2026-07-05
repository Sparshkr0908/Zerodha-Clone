import { Router } from "express";
import { Signup, Login } from "../Controllers/AuthController.js";

const router = Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/',userVerification)

export default router;