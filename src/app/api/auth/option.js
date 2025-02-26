// import type { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import CredentioalsProvider from 'next-auth/providers/credentials';

export const options = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })      
    ]
}