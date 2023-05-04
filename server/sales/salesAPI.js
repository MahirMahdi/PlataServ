import express from "express";
import createSales, {
  salesDetailsReport,
  salesChartReport,
  speedOfServiceReport,
  getSalesOfLast24Hours,
  recentSale,
} from "./salesController.js";

const router = express.Router();

router.post("/sales", createSales);
router.post("/report/sales-details", salesDetailsReport);
router.post("/chart/sales", salesChartReport);
router.post("/report/speed-of-service", speedOfServiceReport);
router.get("/completed-orders", getSalesOfLast24Hours);
router.get("/recent/sale", recentSale);

export { router as salesRouter };
