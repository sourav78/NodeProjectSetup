import { Request, Response, Router } from "express";
import { handleLogin, responseSend } from "../controller/loginHandler.controller.js";

const authRouter = Router()

authRouter
    .get('/', responseSend)
    .post('/login', handleLogin)

export default authRouter;