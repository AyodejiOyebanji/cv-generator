import mongoose from "mongoose";

export default function handlerConnection(){
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URL,(err)=>{
        if(err){
            console.log(err)
            console.log("Failed to connect to database")
        }else{
            console.log("connection successful")
        }
    })
}