import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"
import ConnectDB from "./db/index.js"
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})
ConnectDB()




























/*import express from "express"
const app=express()
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror",(error)=>{
            console.log("ERRR:",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app listining at port:${process.env.PORT}`)

        })
    } catch (error) {
        console.error("ERROR:",error)
        throw error
        
    }
    

})()*/