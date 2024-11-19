import { Request, Response } from "express";

export const routeNotFound = (
    req:Request, res:Response
) => {
    res.status(400).json({
        success: false,
        message: "Route not found"
    })

    return;
}