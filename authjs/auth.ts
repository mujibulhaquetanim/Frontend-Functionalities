import { signinSchema } from "@/schema/signinSchema";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github    from "next-auth/providers/github";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Github({
            profile(profile){
                // this function is called when user logs in and we get the profile of user which returns an object with id, name and email, we use this object to store user in our database.
                return {
                    //make sure to convert id to string because id is of type bigint
                    //profile object has id, name and email so if we give any other values to them, original values will be overwritten. i.e. id: "some name", instead of this, id will be the returned value of profile object.
                    id: profile.id.toString(),
                    name: profile.name,
                    email: profile.email,
                    role: 'user'
                }
            }
        }),
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
                
                // this is dummy user, it will be replaced with actual user from database.
                user={
                    id: "1",
                    name: 'John Doe',
                    email: '9Qq9Z@example.com',
                    role: 'admin'
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

        //this function is called when a token is created or updated, when user logins we get access token and user object. user object is from credentials provider (authorize function)
        jwt({token, user}){
            if(user){
                token.id = user.id as string;
                token.role = user.role as string;
            }
            return token
        },
        //it is executed whenever we try to access tokenx`
        session({session, token}){
            session.user.id = token.id
            session.user.role = token.role
            return session;
        }
    },
    //pages block defined where should custom pages be rendered
    pages: {
        signIn: '/auth/signin'
    },
})