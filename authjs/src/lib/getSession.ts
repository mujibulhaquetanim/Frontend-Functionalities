import { auth } from "../../auth";
import { cache } from "react";

//it is used when we are using server component but we are using custom hook which is used to get the session and keep it in the cache. Especially valuable in server components where you want to cache data fetched on the server.
export const getSession = cache(async()=>{
    const session = await auth();
    return session;
})