import express from 'express';
import createInventory, { updateInventory } from './inventoryController.js';
import { totalCountTracker } from './inventoryTracker.js';

const router = express.Router();

router.post('/inventory', createInventory);
router.put('/inventory', totalCountTracker, updateInventory);

export {router as inventoryRouter};