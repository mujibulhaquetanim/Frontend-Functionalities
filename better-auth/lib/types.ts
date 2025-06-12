import z from "zod";

export const signupSchema = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z
    .string({
        message: "Please enter a valid password",
    })
    .min(7, {
        message: "Password must be at least 7 characters",
    })
    .max(20, {
        message: "Password must be less than 20 characters",
    })
})

export const signinSchema = z.object({
    email: z
    .string()
    .email({
        message: "Please enter a valid email address",
    })
    .min(3, {
        message: "Email must be at least 3 characters",
    }),
    password: z
    .string({
        message: "Please enter a valid password",
    })
    .min(7, {
        message: "Password must be at least 7 characters",
    })
    .max(20, {
        message: "Password must be less than 20 characters",
    }),
})