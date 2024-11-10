import express from 'express'
import mongoose from 'mongoose'
import router from "./Router.js";
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const app = express()
const url = process.env.LOGIN_MONGO

app.use(express.json())
app.use('/api', router)
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET"]
}))
async function StartApp() {
    try {
        await mongoose.connect(url)
        app.listen(5000, () => {
            console.log('Server started on port ' + 5000)
        })
    } catch (e) {
        console.log(e.message)
    }
}

StartApp()