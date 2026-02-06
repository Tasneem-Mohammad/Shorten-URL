import express from "express";
import {handleUserSignup , handleUserlogin} from "../controller/user.js"
const userRouter = express.Router();

userRouter.post("/" ,handleUserSignup);
userRouter.post("/login" ,handleUserlogin);

export default userRouter;