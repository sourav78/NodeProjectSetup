import { Request, Response, Router } from "express";
import { handleLogin, registerHandler, responseSend } from "../controller/auth.controller.js";

const authRouter = Router()

authRouter
    .get('/', responseSend)
    .post('/login', handleLogin)
    .post('/register', registerHandler)

export default authRouter;