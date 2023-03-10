import Product from "./product.js";

export default function createProduct(req,res){

    const product = req.body
    product.image = process.env.IMAGE_URL + req.file.originalname

    try {
        Product.create(product)
        res.json({success:"Product created successfully!"})
    } catch (error) {
        res.json({error: 'Error'})
    }

}

export async function getAllProducts(req,res){
    try {
        const allProducts = await Product.find({})
        res.json({products: allProducts})
    } catch (error) {
        res.json({error:error})
    }    
}
