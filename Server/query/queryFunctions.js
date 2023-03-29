import Purchases from "../purchases/purchases.js";
import Sales from '../sales/sales.js';
import Waste from "../waste/waste.js";
import FoodBank from "../foodbank/foodbank.js";

export default async function buildDailyReport(type,date){

    if (type === "Purchases") {
        
        const filter_date = formatDate(date);
        const one_day_ahead_of_filter_date = formatOneDayAheadOfDate(date);

        const reports = await Purchases.find({createdAt: {
            $gte: new Date(filter_date),
            $lt: new Date(one_day_ahead_of_filter_date)
        }});

        return reports;
    }

    else if (type === "Waste") {

        const filter_date = formatDate(date);
        const one_day_ahead_of_filter_date = formatOneDayAheadOfDate(date);

        const reports = await Waste.find({createdAt: {
            $gte: new Date(filter_date),
            $lt: new Date(one_day_ahead_of_filter_date)
        }});

        return reports;
    }

    else if (type === "Foodbank") {

        const filter_date = formatDate(date);
        const one_day_ahead_of_filter_date = formatOneDayAheadOfDate(date);

        const reports = await FoodBank.find({createdAt: {
            $gte: new Date(filter_date),
            $lt: new Date(one_day_ahead_of_filter_date)
        }});

        return reports;
    }

    else{

        const filter_date = formatDate(date);
        const one_day_ahead_of_filter_date = formatOneDayAheadOfDate(date);

        const reports = await Sales.find({createdAt: {
            $gte: new Date(filter_date),
            $lt: new Date(one_day_ahead_of_filter_date)
        }});

        return reports;
    }
}

export async function buildCustomReport(type,startDate, endDate){

    if(type === "Purchases") {

        const start_date = formatDate(startDate);
        const end_date = formatDate(endDate);

        const reports = await Purchases.find({createdAt: {
            $gte: start_date,
            $lte: end_date
        }});

        return reports;
    }

    else if (type === "Waste") {

        const start_date = formatDate(startDate)
        const end_date = formatDate(endDate)

        const reports = await Waste.find({createdAt: {
            $gte: start_date,
            $lte: end_date
        }})

        return reports
    }

    else if (type === "Foodbank") {

        const start_date = formatDate(startDate)
        const end_date = formatDate(endDate)

        const reports = await FoodBank.find({createdAt: {
            $gte: start_date,
            $lte: end_date
        }})

        return reports
    }
    else{

        const start_date = formatDate(startDate);
        const end_date = formatDate(endDate);

        const reports = await Sales.find({createdAt: {
            $gte: start_date,
            $lte: end_date
        }});

        return reports;
    }
}

export async function buildMonthlyReport(type,month){

    if(type === "Purchases") {

        const range = formatMonth(month);

        const reports = await Purchases.find({createdAt: {
            $gt: range.month_one,
            $lt: range.month_two
        }});

        return reports;
    }

    else if (type === "Waste") {

        const range = formatMonth(month);

        const reports = await Waste.find({createdAt: {
            $gt: range.month_one,
            $lt: range.month_two
        }});

        return reports;
    }

    else if (type === "Foodbank") {

        const range = formatMonth(month)

        const reports = await FoodBank.find({createdAt: {
            $gt: range.month_one,
            $lt: range.month_two
        }});

        return reports;
    }

    else{

        const range = formatMonth(month);

        const reports = await Sales.find({createdAt: {
            $gt: range.month_one,
            $lt: range.month_two
        }});

        return reports;
    }
}

export function formatDate(given_date){

    const date = new Date(given_date);

    if (isNaN(date.getTime())) {
        console.log("invalid date");
      }

    const year = date.getFullYear(); 
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

function formatOneDayAheadOfDate(given_date){

    const provided_date = new Date(given_date);

    const date = new Date(new Date(provided_date).setDate(provided_date.getDate() + 1));

    const year = date.getFullYear(); 
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

function formatMonth(given_date){
    
    const date = new Date(given_date);

    const year = date.getFullYear(); 

    const month_one = ('0' + (date.getMonth() + 1)).slice(-2);
    const month_two = ('0' + (date.getMonth() + 2)).slice(-2);

    const formattedMonth = `${year}-${month_one}`;
    const one_month_ahead_of_formattedMonth = `${year}-${month_two}`;

    const month_range = {month_one: formattedMonth, month_two: one_month_ahead_of_formattedMonth};

    return month_range;
}
