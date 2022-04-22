import jwt from "jsonwebtoken";
import User from "../models/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import bcrypt from "bcrypt";

export const Register = async (req, res, next) => {
  try {
    const { email, name, password } = req.body;
    const found = await User.findOne({ email });
    if (found) throw new ErrorHandler("Error: User already exist");
    const hash = await bcrypt.hash(password, 5);
    const { _id } = await User.create({ name, email, password: hash });
    const token = jwt.sign({ _id }, process.env.JWT_SECRET);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

export const LogIn = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    const found = await User.findOne({ email }).select("+password");
    if (!found) throw new ErrorHandler("User does not exist");
    const match = await bcrypt.compare(password, found.password);
    if (!match) throw new ErrorHandler("Password is incorrect");
    const token = jwt.sign({ _id: found._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

export const getUser = (req, res) => {
  res.json(req.user);
};
