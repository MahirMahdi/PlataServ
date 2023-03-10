import express from 'express'
import Order from './order.js'
import createOrder from './orderController.js'

const router = express.Router()

router.post('/order', createOrder)

export {router as orderRouter}