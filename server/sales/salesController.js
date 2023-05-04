import Sales from "./sales.js";
import buildDailyReport, {
  buildMonthlyReport,
  buildWeeklyReport,
} from "../query/queryFunctions.js";

export default async function createSales(req, res) {
  const orderDetails = req.body.orderDetails;
  try {
    await Sales.insertMany(orderDetails);
    res.json({ message: "Order completed!" });
  } catch (error) {
    res.json({ error: error });
  }
}

export async function getSalesOfLast24Hours(req, res) {
  try {
    const result = await Sales.find({
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    });

    if (result.length !== 0) {
      res.json({ orders: result });
    } else {
      res.json({ orders: [] });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function recentSale(req, res) {
  try {
    const recent_sale = await Sales.find().sort({ $natural: -1 }).limit(1);

    const { total_quantity, total_price, payment_method, createdAt } =
      recent_sale[0];

    res.json({
      recent: {
        total_quantity: total_quantity,
        total_amount: total_price,
        transaction_type: payment_method,
        date: createdAt,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function salesDetailsReport(req, res) {
  try {
    const type = req.body.type;

    if (type === "daily") {
      const reports = await buildDailyReport("Sales", req.body.date);
      const details_report = generateSalesDetailsReport(reports);
      res.json({ reports: details_report });
    } else if (type === "weekly") {
      const reports = await buildWeeklyReport(
        "Sales",
        req.body.start_date,
        req.body.end_date
      );
      const details_report = generateSalesDetailsReport(reports);
      res.json({ reports: details_report });
    } else {
      const reports = await buildMonthlyReport("Sales", req.body.month);
      const details_report = generateSalesDetailsReport(reports);
      res.json({ reports: details_report });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function salesChartReport(req, res) {
  try {
    const type = req.body.type;

    if (type === "daily") {
      const reports = await buildDailyReport("Sales", req.body.date);
      const details_report = generateSalesChartReport(reports);
      res.json({ reports: details_report });
    } else if (type === "weekly") {
      const reports = await buildWeeklyReport(
        "Sales",
        req.body.start_date,
        req.body.end_date
      );
      const details_report = generateSalesChartReport(reports);
      res.json({ reports: details_report });
    } else {
      const reports = await buildMonthlyReport("Sales", req.body.month);
      const details_report = generateSalesChartReport(reports);
      res.json({ reports: details_report });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function speedOfServiceReport(req, res) {
  try {
    const type = req.body.type;

    if (type === "daily") {
      const reports = await buildDailyReport("Sales", req.body.date);

      const reports_by_period = generateSpeedOfServiceReportByPeriod(reports);

      const reports_by_timeline =
        generateSpeedOfServiceReportByTimeline(reports);

      res.json({
        reports: {
          by_period: reports_by_period,
          by_timeline: reports_by_timeline,
        },
      });
    } else if (type === "custom") {
      const reports = await buildCustomReport(
        "Sales",
        req.body.start_date,
        req.body.end_date
      );

      const reports_by_period = generateSpeedOfServiceReportByPeriod(reports);

      const reports_by_timeline =
        generateSpeedOfServiceReportByTimeline(reports);

      res.json({
        reports: {
          by_period: reports_by_period,
          by_timeline: reports_by_timeline,
        },
      });
    } else {
      const reports = await buildMonthlyReport("Sales", req.body.month);

      const reports_by_period = generateSpeedOfServiceReportByPeriod(reports);

      const reports_by_timeline =
        generateSpeedOfServiceReportByTimeline(reports);

      res.json({
        reports: {
          by_period: reports_by_period,
          by_timeline: reports_by_timeline,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function filterByType(data, type) {
  const details = data
    .map((obj) => obj.details)
    .reduce((acc, curr) => acc.concat(curr), []);
  const filtered_details = details.filter(
    (detail) => detail.product_type === type.toLowerCase()
  );

  const units_sold = filtered_details.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  const total_sales = Number(
    filtered_details.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)
  );

  return { type: type, units_sold: units_sold, total_sales: total_sales };
}

function generateSalesDetailsReport(data) {
  const burger = filterByType(data, "Burger");
  const sides = filterByType(data, "Sides");
  const drinks = filterByType(data, "Drinks");
  const sandwich = filterByType(data, "Sandwich");

  return [burger, sides, drinks, sandwich];
}

function generateSalesChartReport(data) {
  const total_units_sold = data.reduce(
    (acc, curr) => acc + curr.total_quantity,
    0
  );

  const burger = filterByType(data, "Burger");
  const burger_percentage = percentageCalculator(
    burger.units_sold,
    total_units_sold
  );

  const sides = filterByType(data, "Sides");
  const sides_percentage = percentageCalculator(
    sides.units_sold,
    total_units_sold
  );

  const drinks = filterByType(data, "Drinks");
  const drinks_percentage = percentageCalculator(
    drinks.units_sold,
    total_units_sold
  );

  const sandwich = filterByType(data, "Sandwich");
  const sandwich_percentage = percentageCalculator(
    sandwich.units_sold,
    total_units_sold
  );

  return [
    burger_percentage,
    sandwich_percentage,
    drinks_percentage,
    sides_percentage,
  ];
}

function percentageCalculator(type_value, total_value) {
  return Number(((type_value / total_value) * 100).toFixed(2));
}

function generateSpeedOfServiceReportByPeriod(data) {
  const six_to_two = data.filter(
    (obj) =>
      new Date(obj.createdAt).getUTCHours() > 6 &&
      new Date(obj.createdAt).getUTCHours() <= 14
  );
  const two_to_ten = data.filter(
    (obj) =>
      new Date(obj.createdAt).getUTCHours() > 14 &&
      new Date(obj.createdAt).getUTCHours() <= 22
  );
  const ten_to_six = data.filter(
    (obj) =>
      new Date(obj.createdAt).getUTCHours() > 22 ||
      new Date(obj.createdAt).getUTCHours() <= 6
  );

  const six_to_two_report = {
    label: "6:00 AM - 2:00 PM",
    count: six_to_two.length,
    avg_time: calculateAverageTime(six_to_two),
  };
  const two_to_ten_report = {
    label: "2:00 PM - 10:00 PM",
    count: two_to_ten.length,
    avg_time: calculateAverageTime(two_to_ten),
  };
  const ten_to_six_report = {
    label: "10:00 PM - 6:00 AM",
    count: ten_to_six.length,
    avg_time: calculateAverageTime(ten_to_six),
  };

  return [six_to_two_report, two_to_ten_report, ten_to_six_report];
}

function generateSpeedOfServiceReportByTimeline(data) {
  const sixty_secs = data.filter((obj) => obj.time <= 60);
  const one_twenty_secs = data.filter(
    (obj) => obj.time <= 120 && obj.time > 60
  );
  const one_eighty_secs = data.filter(
    (obj) => obj.time <= 180 && obj.time > 120
  );

  const sixty_secs_report = {
    label: "60",
    count: sixty_secs.length,
    percentage: percentageCalculator(sixty_secs.length, data.length),
  };
  const one_twenty_secs_report = {
    label: "120",
    count: one_twenty_secs.length,
    percentage: percentageCalculator(one_twenty_secs.length, data.length),
  };
  const one_eighty_secs_report = {
    label: "180",
    count: one_eighty_secs.length,
    percentage: percentageCalculator(one_eighty_secs.length, data.length),
  };

  return [sixty_secs_report, one_twenty_secs_report, one_eighty_secs_report];
}

function calculateAverageTime(data) {
  const total_time = data.reduce((acc, curr) => acc + curr.time, 0);
  const avg_time = Number((total_time / data.length).toFixed(2));

  return avg_time;
}
