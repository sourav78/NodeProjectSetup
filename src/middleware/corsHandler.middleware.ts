import cors from "cors"

const allowedOrigins = [process.env.FRONTEND_DOMAINS]

export const corsOption:cors.CorsOptions = {
    origin: (origin, callback) => {
        if(!origin && allowedOrigins.includes(origin)){
            callback(null, true)
        }else{
            callback(new Error("CORS policy is not allowed this origin"))
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
    credentials: true, // Allow cookies to be sent with cross-origin requests
}