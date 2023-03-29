import Waste from "./waste.js";
import Inventory from "../inventory/inventory.js";
import buildDailyReport, {buildMonthlyReport, buildCustomReport} from "../query/queryFunctions.js";

export default async function sendToWaste(items){

    try {
        const items_in_waste_structure = items.map(item => {
            const { _id, expiry_date, ...itemObject } = item.toObject();
            return itemObject;
        });

        const items_ids = items.map(item => item._id);

        await Waste.insertMany(items_in_waste_structure);
        await Inventory.deleteMany({_id:{$in: items_ids}});
    } catch (error) {
        console.log(error);
    }
}

export async function wasteReport(req,res){

    try {
        const type = req.body.type;
        if (type === 'daily'){
            const reports = await buildDailyReport("Waste",req.body.date);
            res.json({reports:reports});
        }

        else if (type === 'custom'){
            const reports = await buildCustomReport("Waste",req.body.start_date, req.body.end_date );
            res.json({reports:reports});
        }

        else{
            const reports = await buildMonthlyReport("Waste",req.body.month);
            res.json({reports:reports});
        }
    } catch (error) {
        console.log(error);
    }
}