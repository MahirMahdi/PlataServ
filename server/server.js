import mongoose from "mongoose";
import { app } from "./app.js";
import http from "http";

const server = http.createServer(app);

mongoose.set("strictQuery", false);

async function initDB() {
  try {
    mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb is connected");
  } catch (error) {
    console.log(error);
  }
}

initDB();

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
