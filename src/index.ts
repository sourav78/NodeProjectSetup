import dotenv from 'dotenv'
dotenv.config()
import express,{ Request, Response } from 'express'

const app = express()

app.use("/", (req:Request, res:Response) => {
    res.send("Hello")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is working on : http://localhost:${process.env.PORT}`);
})