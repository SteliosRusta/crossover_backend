import { Router } from "express";
import { LogIn, Register, getUser } from "../controllers/User.js";

const authRouter = Router();

authRouter.post("/signup", Register);
authRouter.post("/login", LogIn);
authRouter.get("/user", getUser);

export default authRouter;
