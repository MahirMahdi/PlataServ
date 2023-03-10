import Product from "./product.js";

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

// export async function getSpecificCategoryProducts(req,res){
//     try {
//         const products = await Product.find({type: req.params.type.toLowerCase()})
//         res.json({products: products})
//     } catch (error) {
//         res.json({error})
//     }
// }

export async function getAllProducts(req,res){
    try {
        const allProducts = await Product.find({})
        res.json({products: allProducts})
    } catch (error) {
        res.json({error:error})
    }    
}

// export async function getOrderProductsDetails(req,res){
//     // ingredients details are destructured and quantity is added to each ingredient object for updating inventory. 
//     // 
//     try {
//         const orders = req.body.orders
//         console.log(orders);
//         const ordersIds = Object.keys(orders)
//         const productsDetails = await Product.find({product_id: {$in: ordersIds}}).select('-ingredients')
//         const orderProductsDetails = productsDetails.map(detail => {return {...detail._doc, ['quantity']: orders[detail.product_id]}})
//         Product.find({product_id: {$in: ordersIds}},function(err,docs){
//             let ingredientsDetails = []
//             docs.map(doc => {
//                 const {ingredients,...rest} = doc
//                 ingredients.map(ingredient =>{
//                     const {name, unit_count, ...others} = ingredient
//                     ingredientsDetails.push({name:name, unit_count: unit_count, quantity: orders[doc.product_id]})
//                 })
//             })
//             res.json({ orderProductsDetails: orderProductsDetails, ingredientsDetails: ingredientsDetails })
//         })
//     } catch (error) {
//         res.json({error})
//     }
// }
