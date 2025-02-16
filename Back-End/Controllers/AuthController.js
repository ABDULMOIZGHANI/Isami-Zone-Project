import bcrypt from "bcrypt";
import { User } from "../models/studentSignup.model.js";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const {
      name,
      email,
      gender,
      age,
      country,
      phoneNumber,
      whatsappNumber,
      password,
      language,
      underWhichTeacher,
      studentDescription,
      hearAboutUS,
    } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "Email already exists", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      gender,
      age,
      country,
      phoneNumber,
      whatsappNumber,
      password: hashedPassword,
      language,
      underWhichTeacher,
      studentDescription,
      hearAboutUS,
    });

    await newUser.save();

    res.status(201).json({ message: "Signup successful", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};

//
//
// LOGIN MAKING
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // if user's email is not find in databse then show this error
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    // if passwords match then the user is logedin
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      "your_secret_key",
      {
        expiresIn: "7d", // Token expires in 7 days
      }
    );

    res.status(200).json({
      message: "Login successful",
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      success: false,
      error: error.message,
    });
  }
};

export { signup, login };
