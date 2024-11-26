
import { ConnectDB } from "../../../../lib/config/db"
import Blog from "../../../../lib/models/BlogModels"

const { NextResponse } = require("next/server")

const LoadDB = async ()=> {
    await ConnectDB()
}
LoadDB()

export const GET = async (request) =>{
    const blogs = await Blog.find()
    return NextResponse.json({success: true, data: blogs})
}

export const POST = async(req, res)=> {    
    const body = await req.json()     
    await Blog.create(body);       
    return NextResponse.json({success: true, message: "Add new post successfully"})
}