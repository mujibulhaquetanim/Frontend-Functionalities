import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import email from "next-auth/providers/email";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: {label: 'Email', type: 'email'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
                //only way login become successful is if user exists, 
                let user = null;
                user={
                    id: 1,
                    name: 'John Doe',
                    email: '9Qq9Z@example.com',
                }

                if(!user) {
                    return null
                }
                
                return user
            }
        })
    ]
})