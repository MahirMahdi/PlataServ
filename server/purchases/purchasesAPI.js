import express from "express";
import createPurchase, {
  purchasesReport,
  purchasesChart,
  recentPurchase,
} from "./purchasesController.js";

const router = express.Router();

router.post("/purchases", createPurchase);
router.post("/report/purchases", purchasesReport);
router.post("/chart/purchases", purchasesChart);
router.get("/recent/purchases", recentPurchase);

export { router as purchasesRouter };
