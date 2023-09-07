import { Router } from "express";
import handleSignup, { handleLogin, refreshToken } from "./authController.js";

const router = Router();

router.post("/signup", handleSignup);
router.post("/login", handleLogin);
router.get("/refresh", refreshToken);

export { router as authRouter };
