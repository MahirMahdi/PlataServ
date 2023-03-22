import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { inventoryRouter } from './inventory/inventoryAPI.js';
import { productRouter } from './products/productAPI.js';
import { suppliesRouter } from './supplies/suppliesAPI.js';
import { salesRouter } from './sales/salesAPI.js';
import expiryTracker from './inventory/inventoryTracker.js';
import { foodbankRouter } from './foodbank/foodbankAPI.js';
import { alertRouter } from './alert/alertAPI.js';
import { discountRouter } from './discount/discountAPI.js';
import { purchasesRouter } from './purchases/purchasesAPI.js';
import { parRouter } from './par/parAPI.js';

const app = express();
const env = dotenv.config();


mongoose.set('strictQuery', false)
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({origin: "*"}));
app.use('/home',express.static('uploads'));

async function initDB(){
    try {
        mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true, useUnifiedTopology: true});
        console.log('mongodb is connected');
    } catch (error) {
        console.log(error);
    }
}

initDB()

app.use(inventoryRouter)
app.use(productRouter)
app.use(suppliesRouter)
app.use(salesRouter)
app.use(foodbankRouter)
app.use(alertRouter)
app.use(discountRouter)
app.use(purchasesRouter)
app.use(parRouter)

expiryTracker()

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})