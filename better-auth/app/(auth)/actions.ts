"use server";

import { auth } from "@/lib/auth";
import { validatedAction } from "@/lib/action-helper";
import {signinSchema,signupSchema} from "@/lib/types";
import {redirect} from "next/navigation";

export const signInAction = validatedAction(signinSchema, async (data)=>{
    const {email, password} = data;

    await auth.api.signInEmail({
        body: {
            email,
            password
        }
    });

    redirect("/dashboard");
});