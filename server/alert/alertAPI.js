import express from "express";
import { getAlerts } from "./alertController.js";

const router = express.Router();

router.get("/alerts", getAlerts);

export { router as alertRouter };
