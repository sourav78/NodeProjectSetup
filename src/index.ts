import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { starterMessage } from './utils/starterMessage.js'
import path from 'path'
import { loggerMessage } from './middleware/logger.middleware.js'
import { customLoggingHander } from './middleware/customLogger.middleware.js'
import { corsOption } from './middleware/corsHandler.middleware.js'

export const application = express()

export const MAIN = () => {

    // Initializing Middlewares
    application.use(express.urlencoded({ extended: true }))
    application.use(express.json())
    application.use(cookieParser())

    //Serving static content
    application.use(express.static("public"))

    // Setup view engine
    application.set("view engine", "ejs")
    application.set("views", path.join(path.resolve("view")))

    // Logging and configuration
    application.use(loggerMessage); // This is winston morgan logger
    // application.use(customLoggingHander); //This is custom logger

    // CORS configuration
    application.use(cors(corsOption))

    // Stater Message for health check
    application.use("/", starterMessage)

    application.listen(process.env.PORT, () => {
        console.log("-----------------------------------------------");
        console.log(`Server is working on : http://localhost:${process.env.PORT}`);
        console.log("-----------------------------------------------");
    })
}

MAIN()