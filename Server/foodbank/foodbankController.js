import Alert from '../alert/alert.js';
import Inventory from '../inventory/inventory.js';
import FoodBank from './foodbank.js';
import buildDailyReport, { buildMonthlyReport, buildCustomReport } from '../query/queryFunctions.js';

export default async function createFoodbankDonation(req,res){
    try {
        const {_id, item} = req.body;

        await FoodBank.insertMany(item);

        await Inventory.deleteOne({_id: item._id});

        await Alert.deleteOne({_id: _id});
    } catch (error) {
        
    }
}

export async function foodbankReport(req,res){
    try {
        const type = req.body.type;
        if (type === 'daily'){
            const reports = await buildDailyReport("Foodbank",req.body.date);
            res.json({reports:reports});
        }

        else if (type === 'custom'){
            const reports = await buildCustomReport("Foodbank",req.body.start_date, req.body.end_date );
            res.json({reports:reports});
        }

        else{
            const reports = await buildMonthlyReport("Foodbank",req.body.month);
            res.json({reports:reports});
        }
    } catch (error) {
        console.log(error);
    }
}