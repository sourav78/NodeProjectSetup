import { CustomErrorHandler } from "../../../middleware/errorHandler.middleware.js"
import { userDetailsInterface, userLoginInterface } from "../helpers/interfaces.helper.js"

// Validating user details while registering
export const validateUserDetails = (userDetails: userDetailsInterface): void => {
  if (!userDetails.email) {
    throw new CustomErrorHandler(400, "Email is required.")
  }
  if (!userDetails.userName) {
    throw new CustomErrorHandler(400, "Username is required.")
  }
  if (!userDetails.password) {
    throw new CustomErrorHandler(400, "Password is required.")
  }
}

// Validating user details while registering
export const validateLoginDetails = (loginDetails: userLoginInterface): void => {
  if (!loginDetails.email) {
    throw new CustomErrorHandler(400, "Email is required.")
  }
  if (!loginDetails.password) {
    throw new CustomErrorHandler(400, "Password is required.")
  }
}