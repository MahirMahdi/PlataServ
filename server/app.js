import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { inventoryRouter } from "./inventory/inventoryAPI.js";
import { productRouter } from "./products/productAPI.js";
import { suppliesRouter } from "./supplies/suppliesAPI.js";
import { salesRouter } from "./sales/salesAPI.js";
import expiryTracker from "./inventory/inventoryTracker.js";
import { foodbankRouter } from "./foodbank/foodbankAPI.js";
import { alertRouter } from "./alert/alertAPI.js";
import { discountRouter } from "./discount/discountAPI.js";
import { purchasesRouter } from "./purchases/purchasesAPI.js";
import { parRouter } from "./par/parAPI.js";
import { wasteRouter } from "./waste/wasteAPI.js";
import { financeRouter } from "./finance/financeAPI.js";
import { authRouter } from "./auth/authAPI.js";

export const app = express();
const env = dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/home", express.static("uploads"));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
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
app.use(authRouter);

app.get("/trigger-tracker", async (req, res) => {
  try {
    await expiryTracker();
    res.json({ message: "Triggered successfully" });
  } catch (error) {
    res.json({ error: error });
  }
});
