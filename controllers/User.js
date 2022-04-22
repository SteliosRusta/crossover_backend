import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";
export const Register = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const found = await User.findOne({ email });
    if (found) throw "Error: User already exist";
    const hash = await bcrypt.hash(password, 5);
    const { _id } = await User.create({ name, email, password: hash });
    const token = jwt.sign({ _id }, process.env.JWT_SECRET);
    res.status(201).send(token);
  } catch (error) {
    res.send(error);
  }
};
