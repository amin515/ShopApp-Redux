import express from "express";
import dotenv from "dotenv";
import color from "colors";
import cors from "cors";
import connectMongoDB from "./Config/db.js";
import catRouter from "./Router/catRouter.js";
import brandRouter from "./Router/brandRouter.js";
import productRouter from "./Router/productRouter.js";
import path from "path";
import errorHandler from "./Middlewares/errorHandler.js";

const __dirname = path.resolve();
// express init
const app = express();

// env configuration
dotenv.config();

// port declation
const PORT = process.env.SERVER_PORT || 9090;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// static folder
app.use(express.static(path.join(__dirname, "api/public")));

// router get
app.use("/api/v1/product", catRouter, brandRouter, productRouter);

// error handler

// app.use(errorHandler);

// app listener
app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server running on port ${PORT}`.bgMagenta.black);
});
