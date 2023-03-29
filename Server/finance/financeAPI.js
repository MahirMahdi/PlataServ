import express from 'express';
import bankingInformationReport, {cashReport} from './financeController.js';

const router = express.Router();

router.post('/report/bank-info', bankingInformationReport);
router.post('/report/cash', cashReport);

export {router as financeRouter};