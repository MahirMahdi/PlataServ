import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
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
import { wasteRouter } from './waste/wasteAPI.js';
import { financeRouter } from './finance/financeAPI.js';
import passport from 'passport';
import MongoStore  from 'connect-mongodb-session';
import User from './user/user.js';
import { userRouter } from './user/userAPI.js';

export const app = express();
const env = dotenv.config();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use('/home',express.static('uploads'));
app.use(cookieParser());
app.use(cors({credentials:true, origin: process.env.CLIENT_URL}));

const MongoDBStore = MongoStore(session);

export const store = new MongoDBStore({
    uri: process.env.DATABASE,
    collection: 'mySessions'
  });

store.on('error', function(error) {
    console.log(error);
});

app.use(session({ 
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: false,
    store: store
    }));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
    done(err, user);
    });
});


app.use(inventoryRouter);
app.use(productRouter);
app.use(suppliesRouter);
app.use(salesRouter);
app.use(foodbankRouter);
app.use(alertRouter);
app.use(discountRouter);
app.use(purchasesRouter);
app.use(parRouter);
app.use(wasteRouter);
app.use(financeRouter);
app.use(userRouter);

setInterval(()=>{
    expiryTracker()
},86400000);



