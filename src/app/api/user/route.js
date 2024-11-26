import { NextResponse } from "next/server";
import User from "../../../../lib/models/UserModels";

const { ConnectDB } = require("../../../../lib/config/db")

const LoadDB = async()=>{
    await ConnectDB();
}
LoadDB();

export const GET = async()=>{
    const users = await User.find();
    return NextResponse.json({success:true, data: users})
}

export const POST = async(req)=>{
    const body = await req.json();
    await User.create(body);

    return NextResponse.json({success: true, message: "Registration Successfull"})
}