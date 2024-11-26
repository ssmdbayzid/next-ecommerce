import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

const { default: User } = require("../../../../lib/models/UserModels");

export const POST = async(req, res)=>{
    const {email, password} = await req.json();

    const existUser = await User.findOne({email});
    if(existUser){
        return NextResponse.json({msg: "You have alreay an account"}, {status: 400})
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
        email,
        password: hashPassword,
    })

    try {
        await newUser.save();
        return NextResponse.json({success: true, msg:"Register Successfull"})
    } catch (error) {
        return NextResponse.json({success: false, err})
    }
    

}