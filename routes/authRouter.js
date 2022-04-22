import { Router } from "express";
import { Register } from "../controllers/User.js";

const authRouter = Router();

authRouter.post("/signup", Register);

export default authRouter;
