import Purchases from "./purchases.js";

export default async function createPurchase(req,res){
    try {
        const supplies = req.body
        // const bulkWrite = supplies.map(supply => ({
        //     insertOne: supply
        // }))
        Purchases.insertMany(supplies,function(err,res){
            console.log(err,res);
        })
        res.status(200).json({message: 'Purchase details saved!'})
    } catch (error) {
        console.log(error);
    }
};