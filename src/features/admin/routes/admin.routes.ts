import { Request, Response, Router } from "express";
import { adminResponseSend, renderAdminLoginPage } from "../controller/admin.controller.js";

const adminRouter = Router()

adminRouter
    .get('/', adminResponseSend)
    .get('/page', renderAdminLoginPage)

export default adminRouter;