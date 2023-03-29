import express from 'express';
import createFoodBankDonation, { foodbankReport } from './foodbankController.js';

const router = express.Router();

router.post('/foodbank', createFoodBankDonation);
router.post('/report/foodbank', foodbankReport);

export {router as foodbankRouter};