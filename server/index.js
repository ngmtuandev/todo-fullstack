import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import TaskRouter from "./TaskRouter.js";
const app = express();

//use express.json() to get data into json format
app.use(json());
app.use(cors());
const PORT = 5000;

app.use("/", TaskRouter);

mongoose
  .connect(
    "mongodb+srv://tuan2k2nhat:manhtuan@cluster0.v1thgk9.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connect Database successfully");
  })
  .catch((err) => console.log(err));
app.listen(PORT, () => {
  console.log("Connect port", PORT);
});
