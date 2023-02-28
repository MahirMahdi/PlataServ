import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { inventoryRouter } from './routes/inventory.js';
import { productRouter } from './routes/products.js';
import { suppliesRouter } from './routes/supplies.js';

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
    finally{
        mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true, useUnifiedTopology: true});
    }
}

initDB()


app.get('/',(req,res)=>{
    res.json({
        message: 'All good'
    })
})

app.use(inventoryRouter)
app.use(productRouter)
app.use(suppliesRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})