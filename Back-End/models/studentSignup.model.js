import mongoose from "mongoose";

const studentSignupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    whatsappNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    underWhichTeacher: {
      type: String,
      required: true,
    },
    studentDescription: {
      type: String,
      required: true,
    },
    hearAboutUS: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", studentSignupSchema);
