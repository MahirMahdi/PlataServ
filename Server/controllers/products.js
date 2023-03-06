import Product from "../models/product.js";

export default function createProduct(req,res){

    const product = req.body
    product.image = process.env.IMAGE_URL + req.file.originalname

    try {
        Product.create(product)
        res.json({message:"Product created successfully!"})
    } catch (error) {
        res.json({error})
    }

}

export async function getSpecificCategoryProducts(req,res){
    try {
        const products = await Product.find({type: req.params.type.toLowerCase()})
        res.json({products: products})
    } catch (error) {
        res.json({error})
    }
}

export async function getOrderProducts(req,res){
    const orders = req.body.orders
    try {
        const products = await Product.find({})
        const orderProducts = products.filter(product=> orders.hasOwnProperty(product.product_id))
        res.json({products: orderProducts})
    } catch (error) {
        res.json({error})
    }
}
