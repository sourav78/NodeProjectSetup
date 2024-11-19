import {Express, Request, Response} from "express"
import authRouter from "../features/auth/routes/auth.routes.js";
import adminRouter from "../features/admin/routes/admin.routes.js";

export const initializingRoutes = (application: Express):void => {
    
    // Router 1
    application.use("/api/admin", adminRouter);

    // Router 2
    application.use("/api/user", authRouter)
}