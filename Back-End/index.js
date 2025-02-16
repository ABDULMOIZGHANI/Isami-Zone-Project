import dotenv from "dotenv";
import express from "express";
import connectDB from "./DB/index.js";
import cors from "cors";
import { Course } from "./models/all-courses.model.js";
import { FreeTrial } from "./models/free-trial.model.js";
import { Testimonial } from "./models/testimonials.model.js";
import bodyParser from "body-parser";
dotenv.config({ path: "./env" });
import authRoutes from "./Routes/AuthRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/auth", authRoutes);

connectDB()
  .then(() => {
    // route for sending the testimonial form data to the database
    app.post("/testimonial", (req, res) => {
      Testimonial.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    // route for sending the free trial form data to the database
    app.post("/free-trial", (req, res) => {
      FreeTrial.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

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
  .catch((err) => console.log(err));
