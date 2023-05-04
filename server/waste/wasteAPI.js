import express from "express";
import { wasteReport, wasteChart, recentWaste } from "./wasteController.js";

const router = express.Router();

router.post("/report/wastes", wasteReport);
router.post("/chart/wastes", wasteChart);
router.get("/recent/wastes", recentWaste);

export { router as wasteRouter };
