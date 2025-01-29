import {z} from 'zod';

export const onboardingSchema = z.object({
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(20),
    username: z.string().min(3).max(20),
    password: z.string().min(3).max(20),
    confirmPassword: z.string().min(3).max(20),
    // refine is on terms field because it is a checkbox and it is a html element so we are not going to get the real boolean value from it that is why we need to refine it and convert it to boolean.
    terms: z.boolean().refine((data)=> data)
})

export type onboardingSchema = z.infer<typeof onboardingSchema>;