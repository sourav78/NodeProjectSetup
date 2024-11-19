import { NextFunction, Request, Response } from "express";


/**
 * CustomErrorHandler class for handling custom error
 * CustomErrorHandler class extending Error class
 */
export class CustomErrorHandler extends Error {
    statusCode: number;

    // Set status code and error message
    constructor(statusCode: number, errMessage: string) {
        super(errMessage)
        this.statusCode = statusCode
        // Set the prototype explicitly (necessary for built-in classes in TypeScript)
        // Object.setPrototypeOf(this, CustomErrorHandler.prototype);
    }
}

// Custom error handler function 
export const errorHandler = (
    err: Error | CustomErrorHandler,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    // Here we handling cutom error
    if (err instanceof CustomErrorHandler) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message
        })

        return;
    }

    // Loggin the error
    console.error(err)

    // Handing the other error
    res.status(500).json({
        success: false,
        message: err.message || "Internal server error. Please try again later."
    })

}