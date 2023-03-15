import express from 'express'
import createFoodBankDonation from './foodbankController.js'

const router = express.Router()

router.post('/foodbank',createFoodBankDonation)

export {router as foodbankRouter}