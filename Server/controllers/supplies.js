import Product from "../models/product.js";

export default async function getSupplies(req,res){
    try {
        const supplies = await Product.find({}, 'ingredients')
        res.json({supplies:supplies})
    } catch (error) {
        res.json({error})
    }
}