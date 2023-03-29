import express from 'express';
import { wasteReport } from './wasteController.js';

const router = express.Router();

router.post('/report/waste', wasteReport)

export {router as wasteRouter};