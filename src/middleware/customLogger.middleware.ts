import { NextFunction, Request, Response } from "express";

export const customLoggingHander = (
    req:Request,
    res: Response,
    next: NextFunction
) => {
    console.log(`Incomming : METHOD : [${req.method}] - URL : [${req.url}] - IP : [${req.ip}]`)

    res.on("finish", () => {
        console.log(`Result : METHOD : [${req.method}] - URL : [${req.url}] - IP : [${req.ip}] - STATUS : [${res.statusCode}]`)
    })

    next();
}