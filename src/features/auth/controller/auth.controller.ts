import { NextFunction, Request, Response } from "express";
import { CustomErrorHandler } from "../../../middleware/errorHandler.middleware.js";
import { validateLoginDetails, validateUserDetails } from "../validators/userDetails.validator.js";
import AuthRepository from "../repository/auth.repository.js";


// Register a new user handler
export const registerHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userDetails = req.body

    // Validate requierd user details
    validateUserDetails(userDetails)

    // Cheking duplicated email
    const duplicatedUser = await AuthRepository.checkDuplicate(userDetails.email)
    if(duplicatedUser){
      throw new CustomErrorHandler(400, "This email is already registred.")
    }

    // Insert user into database
    await AuthRepository.registerUser(userDetails)
    
    res.status(201).json({
      success: true,
      message: "User registerd successfully."
    })

    return;
  } catch (e) {
    next(e)
  }
}

// This just testing purpose
export const handleLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body

  try {

    validateLoginDetails({email, password})

    const mainEmail = "hello@gmail.com"
    const mainPassword = "hello"

    if (email !== mainEmail || password !== mainPassword) {
      throw new CustomErrorHandler(400, "Credentials are not match.")
    }

    res.status(200).json({
      success: true,
      message: "Login successfull"
    })

    return;
  } catch (e) {
    next(e)
  }
}

export const responseSend = async (req: Request, res: Response, next: NextFunction) => {
  res.send("Auth route")
  return;
}