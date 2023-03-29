import express from 'express';
import createSales, { salesDetailsReport, salesChartReport, speedOfServiceReport } from './salesController.js';

const router = express.Router();

router.post('/sales', createSales);
router.post('/report/sales-details', salesDetailsReport);
router.post('/report/sales-chart', salesChartReport);
router.post('/report/speed-of-service', speedOfServiceReport);

export {router as salesRouter};