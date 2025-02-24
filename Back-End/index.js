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
import { User } from "./models/studentSignup.model.js";
import { Teacher } from "./models/teacherSignup.model.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/auth", authRoutes);

connectDB()
  .then(() => {
    //delete teacher by search their ID
    app.delete("/deleteTeacher/:id", (req, res) => {
      const id = req.params.id;
      Teacher.findByIdAndDelete({ _id: id })
        .then(() => res.json({ message: "Teacher data deleted successfully" }))
        .catch((err) => res.json(err));
    });

    // route for getting all teachers from database
    app.get("/all-teachers", (req, res) => {
      Teacher.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    //delete student by search their ID
    app.delete("/deleteUser/:id", (req, res) => {
      const id = req.params.id;
      User.findByIdAndDelete({ _id: id })
        .then(() => res.json({ message: "User deleted successfully" }))
        .catch((err) => res.json(err));
    });

    // route for getting all students from database
    app.get("/all-students", (req, res) => {
      User.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    //update value of approve
    app.put("/approve-testimonial/:id", (req, res) => {
      try {
        const id = req.params.id;
        console.log(id);

        Testimonial.findByIdAndUpdate({ _id: id }, { approve: true })
          .then((users) => res.json(users))
          .catch((err) => res.json(err));
      } catch (error) {
        console.error("Error updating testimonial:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    //delete student by search their ID
    app.delete("/deleteTestimonial/:id", (req, res) => {
      const id = req.params.id;
      Testimonial.findByIdAndDelete({ _id: id })
        .then(() => res.json({ message: "User deleted successfully" }))
        .catch((err) => res.json(err));
    });

    // route for getting all testimonials from database
    app.get("/testimonials", (req, res) => {
      Testimonial.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

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

    // add a course to database
    app.post("/addCourses", (req, res) => {
      Course.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    // delete the course
    app.delete("/coursedelete/:id", (req, res) => {
      const id = req.params.id;
      Course.findByIdAndDelete({ _id: id })
        .then(() => res.json({ message: "User deleted successfully" }))
        .catch((err) => res.json(err));
    });

    app.get("/all-courses", (req, res) => {
      Course.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    app.listen(process.env.PORT, (req, res) => {
      console.log("SERVER IS RUNNING");
    });
  })
  .catch((err) => console.log(err));
