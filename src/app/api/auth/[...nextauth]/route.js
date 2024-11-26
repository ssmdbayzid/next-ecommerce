import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { ConnectDB } from "../../../../../lib/config/db";
import User from "../../../../../lib/models/UserModels";


const authOptions = {    
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials){
                if (credentials === null) return null
                await ConnectDB(); 
                try {
                    const user = await User.findOne({email: credentials.email});                    
                    if(user){
                        const isMatch = user?.password === credentials?.password;
                         if(isMatch){
                            return user;
                         }else {
                            throw new Error("Invalid Credentials");
                         }
                    }else {
                        throw new Error("User not found");
                    }                    
                  
                } catch (error) {   
                    throw new Error(error)
                }}
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // authorization: {
            //     params: {
            //         prompt: "consent",
            //         access_type: "offline",
            //         response_type: "code",
            //     },
            // },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    // Additional options can be added here
    callbacks: {
        async signIn({user, account}){
            if(account?.provider == 'credentials') return true;
            
            if(account?.provider == "github"){
                await ConnectDB();
                try {
                    const existUser = await User.findOne({email: user.email});
                    if(!existUser){
                        const newUser = new User({
                            email: user.email,
                        })

                        await newUser.save()
                        return true;
                    }
                    return true;
                } catch (error) {
                    console.log("Error saving user", err)
                    return false;
                }
            }
            if(account?.provider == "google"){                
                try {
                    const existUser = await User.findOne({email: user.email});
                    console.log("this is from google login", existUser)                
                    if(!existUser){
                        const newUser = new User({
                            email: user.email,
                        })

                        await newUser.save()
                        return true;
                    }
                    return true;
                } catch (error) {
                    console.log("Error saving user", err)
                    return false;
                }
            }           
        },
    }
};

export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};


