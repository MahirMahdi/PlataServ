import Purchases from "../purchases/purchases.js";
import Sales from "../sales/sales.js";
import Waste from "../waste/waste.js";
import FoodBank from "../foodbank/foodbank.js";

export default async function buildDailyReport(type, date) {
  if (type === "Purchases") {
    const filter_date = formatDate(date);
    const one_day_ahead_of_filter_date = formatOneDayAheadOfDate(date);

    const reports = await Purchases.find({
      createdAt: {
        $gte: new Date(filter_date),
        $lt: new Date(one_day_ahead_of_filter_date),
      },
    });

    return reports;
  } else if (type === "Waste") {
    const filter_date = formatDate(date);
    const one_day_ahead_of_filter_date = formatOneDayAheadOfDate(date);

    const reports = await Waste.find({
      createdAt: {
        $gte: new Date(filter_date),
        $lt: new Date(one_day_ahead_of_filter_date),
      },
    });

    return reports;
  } else if (type === "Foodbank") {
    const filter_date = formatDate(date);
    const one_day_ahead_of_filter_date = formatOneDayAheadOfDate(date);

    const reports = await FoodBank.find({
      createdAt: {
        $gte: new Date(filter_date),
        $lt: new Date(one_day_ahead_of_filter_date),
      },
    });

    return reports;
  } else {
    const filter_date = formatDate(date);
    const one_day_ahead_of_filter_date = formatOneDayAheadOfDate(date);

    const reports = await Sales.find({
      createdAt: {
        $gte: new Date(filter_date),
        $lt: new Date(one_day_ahead_of_filter_date),
      },
    });

    return reports;
  }
}

export async function buildWeeklyReport(type, startDate, endDate) {
  if (type === "Purchases") {
    const start_date = formatDate(startDate);
    const end_date = formatDate(endDate);

    const reports = await Purchases.find({
      createdAt: {
        $gte: start_date,
        $lte: end_date,
      },
    });

    return reports;
  } else if (type === "Waste") {
    const start_date = formatDate(startDate);
    const end_date = formatDate(endDate);

    const reports = await Waste.find({
      createdAt: {
        $gte: start_date,
        $lte: end_date,
      },
    });

    return reports;
  } else if (type === "Foodbank") {
    const start_date = formatDate(startDate);
    const end_date = formatDate(endDate);

    const reports = await FoodBank.find({
      createdAt: {
        $gte: start_date,
        $lte: end_date,
      },
    });

    return reports;
  } else {
    const start_date = formatDate(startDate);
    const end_date = formatDate(endDate);

    const reports = await Sales.find({
      createdAt: {
        $gte: start_date,
        $lte: end_date,
      },
    });

    return reports;
  }
}

export async function buildMonthlyReport(type, month) {
  if (type === "Purchases") {
    const range = formatMonth(month);

    const reports = await Purchases.find({
      createdAt: {
        $gt: range.month_one,
        $lt: range.month_two,
      },
    });

    return reports;
  } else if (type === "Waste") {
    const range = formatMonth(month);

    const reports = await Waste.find({
      createdAt: {
        $gt: range.month_one,
        $lt: range.month_two,
      },
    });

    return reports;
  } else if (type === "Foodbank") {
    const range = formatMonth(month);

    const reports = await FoodBank.find({
      createdAt: {
        $gt: range.month_one,
        $lt: range.month_two,
      },
    });

    return reports;
  } else {
    const range = formatMonth(month);

    const reports = await Sales.find({
      createdAt: {
        $gt: range.month_one,
        $lt: range.month_two,
      },
    });

    return reports;
  }
}

export function buildWeeklyChart(data, type) {
  const sunday = formatChartData(
    data.filter((data) => new Date(data.createdAt).getDay() === 0),
    type
  );
  const monday = formatChartData(
    data.filter((data) => new Date(data.createdAt).getDay() === 1),
    type
  );
  const tuesday = formatChartData(
    data.filter((data) => new Date(data.createdAt).getDay() === 2),
    type
  );
  const wednesday = formatChartData(
    data.filter((data) => new Date(data.createdAt).getDay() === 3),
    type
  );
  const thursday = formatChartData(
    data.filter((data) => new Date(data.createdAt).getDay() === 4),
    type
  );
  const friday = formatChartData(
    data.filter((data) => new Date(data.createdAt).getDay() === 5),
    type
  );
  const saturday = formatChartData(
    data.filter((data) => new Date(data.createdAt).getDay() === 6),
    type
  );

  const week = sunday.concat(
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
  );
  return week;
}

export function buildMonthlyChart(data, period, type) {
  const year = period.slice(0, 3);
  const month = period.slice(5).startsWith("0")
    ? period.slice(6)
    : period.slice(5);
  const daysInMonth = new Date(year, month, 0).getDate();

  const week1 = formatChartData(
    data.filter((item) => {
      const createdAt = new Date(item.createdAt);
      return (
        createdAt >= new Date(`${period}-01`) &&
        createdAt <= new Date(`${period}-07`)
      );
    }),
    type
  );

  const week2 = formatChartData(
    data.filter((item) => {
      const createdAt = new Date(item.createdAt);
      return (
        createdAt >= new Date(`${period}-07`) &&
        createdAt <= new Date(`${period}-14`)
      );
    }),
    type
  );

  const week3 = formatChartData(
    data.filter((item) => {
      const createdAt = new Date(item.createdAt);
      return (
        createdAt >= new Date(`${period}-14`) &&
        createdAt <= new Date(`${period}-21`)
      );
    }),
    type
  );

  const week4 = formatChartData(
    data.filter((item) => {
      const createdAt = new Date(item.createdAt);
      return (
        createdAt >= new Date(`${period}-21`) &&
        createdAt <= new Date(`${period}-28`)
      );
    }),
    type
  );

  if (daysInMonth > 28) {
    const remaining_days = formatChartData(
      data.filter((item) => {
        const createdAt = new Date(item.createdAt);
        return createdAt >= new Date(`${period}-28`);
      }),
      type
    );
    const month = week1.concat(week2, week3, week4, remaining_days);
    return month;
  } else {
    const month = week1.concat(week2, week3, week4);
    return month;
  }
}

export function formatRecentData(data) {
  const total_quantity = data.reduce(
    (prev, curr) => prev + curr.total_packs,
    0
  );
  const total_amount = data.reduce(
    (prev, curr) => prev + totalPrice(curr.total_packs, curr.pack_price),
    0
  );
  const date = data[0].createdAt;

  return {
    total_quantity: total_quantity,
    total_amount: total_amount,
    date: date,
  };
}

export function formatDate(given_date) {
  const date = new Date(given_date);

  if (isNaN(date.getTime())) {
    console.log("invalid date");
  }

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + (date.getDate() + 1)).slice(-2);

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

function formatOneDayAheadOfDate(given_date) {
  const provided_date = new Date(given_date);

  const date = new Date(
    new Date(provided_date).setDate(provided_date.getDate() + 1)
  );

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + (date.getDate() + 1)).slice(-2);

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

function formatMonth(given_date) {
  const date = new Date(given_date);

  const year = date.getFullYear();

  const month_one = ("0" + (date.getMonth() + 1)).slice(-2);
  const month_two = ("0" + (date.getMonth() + 2)).slice(-2);

  const formattedMonth = `${year}-${month_one}`;
  const one_month_ahead_of_formattedMonth = `${year}-${month_two}`;

  const month_range = {
    month_one: formattedMonth,
    month_two: one_month_ahead_of_formattedMonth,
  };

  return month_range;
}

function formatChartData(arr, type) {
  const array = Array.from(arr);
  if (array.length > 0) {
    if (type === "finance") {
      const total = array.reduce((prev, curr) => prev + curr.total_price, 0);
      return [Number(total.toFixed(2))];
    } else {
      const total = array.reduce(
        (prev, curr) => prev + totalPrice(curr.total_packs, curr.pack_price),
        0
      );
      return [Number(total.toFixed(2))];
    }
  } else {
    return array.concat([0]);
  }
}

function totalPrice(total_packs, pack_price) {
  return Number((total_packs * pack_price).toFixed(2));
}
