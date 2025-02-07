import { signinSchema } from "@/schema/signinSchema";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github    from "next-auth/providers/github";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Github,
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
        //this function is called when user tries to access a protected route and is not authenticated
        authorized({request: {nextUrl}, auth}){
            const isLoggedIn = !!auth?.user;
            const {pathname} = nextUrl;

            //redirect user to home page if they are already logged in
            if(pathname.startsWith('/auth/signin')&& isLoggedIn){
                return Response.redirect(new URL('/', nextUrl));
            }
            //redirect user to login page if they are not logged in
            return !!auth
        },
        jwt({token, user}){
            if(user){
                token.user = user
            }
            return token
        },
        session({session, token}){
            session.user.id = token.id;
            return session;
        }
    },
    //pages block defined where should custom pages be rendered
    pages: {
        signIn: '/auth/signin'
    },
})