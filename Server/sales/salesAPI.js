import express from 'express'
import Sales from './sales.js'
import createSales from './salesController.js'

const router = express.Router()

router.post('/sales', createSales)

export {router as salesRouter}