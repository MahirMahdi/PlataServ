import Product from "../models/product.js";

export default async function createProduct(req,res){

    const product = req.body

    try {
        await Product.create(product)
        res.json({message:"Product created successfully!"})
    } catch (error) {
        res.json({error})
    }

}

export async function getProducts(req,res){
    try {
        const products = await Product.find({type: req.body.type})
        res.json({products: products})
    } catch (error) {
        res.json({error})
    }
}
