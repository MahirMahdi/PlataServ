import { Router } from "express";
import handleSignup, {
  handleLogin,
  refreshToken,
  handleLogout,
} from "./authController.js";

const router = Router();

router.post("/signup", handleSignup);
router.post("/login", handleLogin);
router.get("/refresh", refreshToken);
router.get("/logout", handleLogout);

export { router as authRouter };
