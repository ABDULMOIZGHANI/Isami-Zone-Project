import dotenv from "dotenv";
import express from "express";
import connectDB from "./DB/index.js";
import cors from "cors";
import { Course } from "./models/all-courses.model.js";
dotenv.config({ path: "./env" });

const app = express();
app.use(cors());
app.use(express.json());

connectDB()
  .then(() => {
    app.get("/all-courses", (req, res) => {
      Course.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    app.listen(process.env.PORT, (req, res) => {
      //   res.send("HELLOE");
      console.log("SERVER IS RUNNING");
    });
  })
  .catch();
