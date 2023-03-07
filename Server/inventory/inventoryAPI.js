import express from 'express';
import createInventory, { updateInventory} from './inventoryController.js';

const router = express.Router()

router.post('/inventory', createInventory)
router.put('/inventory', updateInventory)

export {router as inventoryRouter}