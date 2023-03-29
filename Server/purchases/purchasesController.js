import Purchases from "./purchases.js";
import buildDailyReport, { buildCustomReport, buildMonthlyReport } from "../query/queryFunctions.js";

export default async function createPurchase(req,res){
    try {
        const supplies = req.body;
        const supplies_restructured = supplies.map(supply => {
          const {expiry_period, ...rest} = supply;

          const filter_date = new Date();
          const expiry_date = new Date(filter_date.setDate(filter_date.getDate() + expiry_period));

          const newSupply = Object.assign({expiry_date: expiry_date}, rest);

          return newSupply;
        })

        await Purchases.insertMany(supplies_restructured);
        res.status(200).json({message: 'Purchase details saved!'});

    } catch (error) {
        console.log(error);
    }
};

export async function purchasesReport(req,res){

    try {

        const type = req.body.type;

        if (type === 'daily'){
            const reports = await buildDailyReport("Purchases",req.body.date);
            res.json({reports:reports});
        }

        else if (type === 'custom'){
            const reports = await buildCustomReport("Purchases",req.body.start_date, req.body.end_date );
            res.json({reports:reports});
        }

        else{
            const reports = await buildMonthlyReport("Purchases",req.body.month);
            res.json({reports:reports});
        }
    } catch (error) {
        console.log(error);
    }
}