import express from "express";
import createFoodBankDonation, {
  foodbankReport,
  foodbankChart,
  recentDonation,
} from "./foodbankController.js";

const router = express.Router();

router.post("/foodbank", createFoodBankDonation);
router.post("/report/foodbank", foodbankReport);
router.post("/chart/foodbank", foodbankChart);
router.get("/recent/foodbank", recentDonation);

export { router as foodbankRouter };
