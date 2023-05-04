import Purchases from "./purchases.js";
import buildDailyReport, {
  buildWeeklyReport,
  buildMonthlyReport,
  buildWeeklyChart,
  buildMonthlyChart,
  formatRecentData,
} from "../query/queryFunctions.js";

export default async function createPurchase(req, res) {
  try {
    const supplies = req.body;
    const supplies_restructured = supplies.map((supply) => {
      const { expiry_period, ...rest } = supply;

      const filter_date = new Date();
      const expiry_date = new Date(
        filter_date.setDate(filter_date.getDate() + expiry_period)
      );

      const newSupply = Object.assign({ expiry_date: expiry_date }, rest);

      return newSupply;
    });

    await Purchases.insertMany(supplies_restructured);
    res.status(200).json({ message: "Purchase details saved!" });
  } catch (error) {
    console.log(error);
  }
}

export async function purchasesReport(req, res) {
  try {
    const type = req.body.type;

    if (type === "daily") {
      const reports = await buildDailyReport("Purchases", req.body.date);
      res.json({ reports: reports });
    } else if (type === "weekly") {
      const reports = await buildWeeklyReport(
        "Purchases",
        req.body.start_date,
        req.body.end_date
      );
      res.json({ reports: reports });
    } else {
      const reports = await buildMonthlyReport("Purchases", req.body.month);
      res.json({ reports: reports });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function purchasesChart(req, res) {
  try {
    const type = req.body.type;

    if (type === "weekly") {
      const reports = await buildWeeklyReport(
        "Purchases",
        req.body.start_date,
        req.body.end_date
      );
      const chart = buildWeeklyChart(reports, "purchases");
      res.json({ reports: chart });
    } else {
      const period = req.body.month.slice(0, 7);
      const reports = await buildMonthlyReport("Purchases", period);
      const chart = buildMonthlyChart(reports, period, "purchases");
      res.json({ reports: chart });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function recentPurchase(req, res) {
  try {
    const recent_purchase = await Purchases.find()
      .sort({ $natural: -1 })
      .limit(1);
    const all_recent_purchases = await Promise.all(
      recent_purchase.map(async (purchase) => {
        const multiple = await Purchases.find({
          createdAt: purchase.createdAt,
        });
        return multiple;
      })
    );

    const recent_purchase_data = formatRecentData(all_recent_purchases[0]);
    res.json({ recent: recent_purchase_data });
  } catch (error) {
    console.log(error);
  }
}
