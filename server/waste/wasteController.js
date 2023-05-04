import Waste from "./waste.js";
import Inventory from "../inventory/inventory.js";
import buildDailyReport, {
  buildMonthlyReport,
  buildWeeklyReport,
  buildMonthlyChart,
  buildWeeklyChart,
  formatRecentData,
} from "../query/queryFunctions.js";

export default async function sendToWaste(items) {
  try {
    const items_in_waste_structure = items.map((item) => {
      const { _id, expiry_date, ...itemObject } = item.toObject();
      return itemObject;
    });

    const items_ids = items.map((item) => item._id);

    await Waste.insertMany(items_in_waste_structure);
    await Inventory.deleteMany({ _id: { $in: items_ids } });
  } catch (error) {
    console.log(error);
  }
}

export async function wasteReport(req, res) {
  try {
    const type = req.body.type;
    if (type === "daily") {
      const reports = await buildDailyReport("Waste", req.body.date);
      res.json({ reports: reports });
    } else if (type === "weekly") {
      const reports = await buildWeeklyReport(
        "Waste",
        req.body.start_date,
        req.body.end_date
      );
      res.json({ reports: reports });
    } else {
      const reports = await buildMonthlyReport("Waste", req.body.month);
      res.json({ reports: reports });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function wasteChart(req, res) {
  try {
    const type = req.body.type;

    if (type === "weekly") {
      const reports = await buildWeeklyReport(
        "Waste",
        req.body.start_date,
        req.body.end_date
      );
      const chart = buildWeeklyChart(reports, "waste");
      res.json({ reports: chart });
    } else {
      const period = req.body.month.slice(0, 7);
      const reports = await buildMonthlyReport("Waste", period);
      const chart = buildMonthlyChart(reports, period, "waste");
      res.json({ reports: chart });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function recentWaste(req, res) {
  try {
    const recent_waste = await Waste.find().sort({ $natural: -1 }).limit(1);
    const all_recent_wastes = await Promise.all(
      recent_waste.map(async (waste) => {
        const multiple = await Waste.find({ createdAt: waste.createdAt });
        return multiple;
      })
    );

    const recent_waste_data = formatRecentData(all_recent_wastes[0]);
    res.json({ recent: recent_waste_data });
  } catch (error) {
    console.log(error);
  }
}
