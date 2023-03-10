import Order from "./order.js"

export default async function createOrder(req,res){
    const orderDetails = req.body.orderDetails
    try {
        await Order.create(orderDetails)
        res.json({message: 'Order completed!'})
    } catch (error) {
        res.json({error:error})
    }
}