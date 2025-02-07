import { signinSchema } from "@/schema/signinSchema";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: {label: 'Email', type: 'email', placeholder: '9Qq9Z@example.com'},
                password: {label: 'Password', type: 'password', placeholder: '********'}
            },
            async authorize(credentials) {
                //only way login become successful is if user exists, 
                let user = null;

                //validate user credentials
                const parsedCredentials = signinSchema.safeParse(credentials);
                if(!parsedCredentials.success){
                    console.error("Invalid credentials", parsedCredentials.error.errors);
                    return null
                }
                
                //get user
                user={
                    id: "1",
                    name: 'John Doe',
                    email: '9Qq9Z@example.com',
                }

                if(!user) {
                    return null
                }
                
                return user
            }
        }),
    ],
    callbacks: {
        // jwt: async ()=>{},
        // session: async ()=>{}
    },
    pages: {},
})