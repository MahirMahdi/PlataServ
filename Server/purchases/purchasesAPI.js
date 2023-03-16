import express from 'express';
import createPurchase from './purchasesController.js';

const router = express.Router();

router.post('/purchases', createPurchase);

export {router as purchasesRouter};