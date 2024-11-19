import { NextFunction, Request, Response } from "express";
import { CustomErrorHandler } from "../../../middleware/errorHandler.middleware.js";

export const handleLogin = async (req:Request, res:Response, next:NextFunction) => {
    const {email, password} = req.body

    try{

        if(!email || !password){
            throw new CustomErrorHandler(400, "All fields are requierd.")
        }

        const mainEmail = "hello@gmail.com"
        const mainPassword = "hello"

        if(email !== mainEmail || password !== mainPassword){
            throw new CustomErrorHandler(400, "Credentials are not match.")
        }

        res.status(200).json({
            success: true,
            message: "Login successfull"
        })

        return;
    }catch(e){
        next(e)
    }
}

export const responseSend = async (req:Request, res:Response, next:NextFunction) =>{
    res.send("Auth route")
    return;
}