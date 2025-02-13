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
                    role: 'user' //default role as custom types expects a role field.
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
                    // role: 'admin'
                    role: 'user'
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
            const role = auth?.user?.role || 'user';

            //redirect user to home page if they are already logged in
            if(pathname.startsWith('/auth/signin')&& isLoggedIn){
                return Response.redirect(new URL('/', nextUrl));
            }
            
            if(pathname.startsWith('/admin')&& role !== 'admin'){
                return Response.redirect(new URL('/', nextUrl));
            }
            //redirect user to login page if they are not logged in
            return isLoggedIn
        },

        signIn({user, account, profile, email, credentials}){
            // this function is called when user tries to sign in with credentials provider (authorize function)
            // account contains information about the provider we are using, e.g. provider name, type, etc.
            // profile contains information about the user from the provider
            // email and credentials contain information about the user from the credentials provider
            // you can use this information to authenticate the user
            
            // for example, you can use the email to lookup the user in your database
            // and compare the credentials entered by the user with the credentials in the database
            // if they match, you can return the user object
            // if they don't match, you can return null
            
            // here we are just returning the user object that we created above
            console.log(user, account, profile, email, credentials)
            // returning null will redirect user to /auth/signin. returning true will allow the user to sign in.
            return true
        },

        //this function is called when a token is created or updated, when user logins we get access token and user object. user object is from credentials provider (authorize function)
        jwt({token, user}){
            if(user){
                token.id = user.id as string;
                token.role = user.role as string;
            }
            return token
        },
        //it is executed whenever we try to access token`
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