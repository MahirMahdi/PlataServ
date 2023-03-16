import Sales from "./sales.js"

export default async function createSales(req,res){
    const orderDetails = req.body.orderDetails
    try {
        await Sales.create(orderDetails)
        res.json({message: 'Order completed!'})
    } catch (error) {
        res.json({error:error})
    }
}