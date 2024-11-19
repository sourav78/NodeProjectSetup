import { NextFunction, Request, Response } from "express";

export const renderAdminLoginPage = async (req:Request, res:Response, next:NextFunction) =>{
    res.render("admin/admin_page")
}

export const adminResponseSend = async (req:Request, res:Response, next:NextFunction) =>{
    res.send("Admin route")
    return;
}