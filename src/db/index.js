import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const ConnectDB=async ()=>{
    try {
        
    const connectinstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`Connected to DB_HOST:${connectinstance.connection.host}`)
    } catch (error) {
        console.error("Connection to mongodb Failed:",error)
        process.exit(1)
    }

}
export default ConnectDB;