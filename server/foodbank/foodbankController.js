import Alert from "../alert/alert.js";
import Inventory from "../inventory/inventory.js";
import FoodBank from "./foodbank.js";
import buildDailyReport, {
  buildMonthlyReport,
  buildWeeklyReport,
  buildMonthlyChart,
  buildWeeklyChart,
  formatRecentData,
} from "../query/queryFunctions.js";

export default async function createFoodbankDonation(req, res) {
  try {
    const { _id, item } = req.body;

    await FoodBank.insertMany(item);
    await Inventory.deleteOne({ _id: item._id });
    await Alert.deleteOne({ _id: _id });

    res.json({ message: "Donated successfully!" });
  } catch (error) {
    console.log(error);
  }
}

export async function foodbankReport(req, res) {
  try {
    const type = req.body.type;
    if (type === "daily") {
      const reports = await buildDailyReport("Foodbank", req.body.date);
      res.json({ reports: reports });
    } else if (type === "weekly") {
      const reports = await buildWeeklyReport(
        "Foodbank",
        req.body.start_date,
        req.body.end_date
      );
      res.json({ reports: reports });
    } else {
      const reports = await buildMonthlyReport("Foodbank", req.body.month);
      res.json({ reports: reports });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function foodbankChart(req, res) {
  try {
    const type = req.body.type;

    if (type === "weekly") {
      const reports = await buildWeeklyReport(
        "Foodbank",
        req.body.start_date,
        req.body.end_date
      );
      const chart = buildWeeklyChart(reports, "foodbank");
      res.json({ reports: chart });
    } else {
      const period = req.body.month.slice(0, 7);
      const reports = await buildMonthlyReport("Foodbank", period);
      const chart = buildMonthlyChart(reports, period, "foodbank");
      res.json({ reports: chart });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function recentDonation(req, res) {
  try {
    const recent_donation = await FoodBank.find()
      .sort({ $natural: -1 })
      .limit(1);
    const all_recent_donations = await Promise.all(
      recent_donation.map(async (donation) => {
        const multiple = await FoodBank.find({ createdAt: donation.createdAt });
        return multiple;
      })
    );

    const recent_foodbank_data = formatRecentData(all_recent_donations[0]);
    res.json({ recent: recent_foodbank_data });
  } catch (error) {
    console.log(error);
  }
}
