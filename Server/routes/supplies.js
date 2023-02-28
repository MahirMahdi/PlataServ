import express from 'express';
import getSupplies from '../controllers/supplies.js';

const router = express.Router()

router.get('/supplies', getSupplies)

export {router as suppliesRouter}