import jwt from "jsonwebtoken";
import User from "../models/User.js";

const verifyToken = async (req, res, next) => {
  try {
    const {
      headers: { authorization },
    } = req;
    if (!authorization) throw "Please login";
    const { _id } = jwt.verify(authorization, process.env.JWT_SECRET);
    const user = await User.findById(_id);
    if (!user) throw new ErrorHandler("User does not exist");
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
