import express from 'express';
import createPurchase, { purchasesReport } from './purchasesController.js';

const router = express.Router();

router.post('/purchases', createPurchase);
router.post('/report/purchases', purchasesReport)

export {router as purchasesRouter};