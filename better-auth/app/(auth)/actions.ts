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

export const signUpAction = validatedAction(signupSchema, async (data)=>{
    const {name, email, password} = data;

    await auth.api.signUpEmail({
        body: {
            name,
            email,
            password
        }
    });

    redirect("/dashboard");
})