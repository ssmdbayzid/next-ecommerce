import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect("mongodb+srv://nagardola:lUHgc09rMhC7JVvq@cluster0.w9eio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("DB connected")
}
