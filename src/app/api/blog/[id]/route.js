import { NextResponse } from "next/server";
import Blog from "../../../../../lib/models/BlogModels";

export const GET = async(req, params)=>{
    const {id} = params.params;
    const blog = await Blog.findById(id);

    return NextResponse.json({success: true, data: blog})
}

export const DELETE = async(req, {params})=>{
    const {id} = params;
    console.log("Next js DELETE method")
    await Blog.findByIdAndDelete(id);
    
    return NextResponse.json({success: true, msg: `Detete blog successfully id: ${id}`})
}