import z from "zod";

export type ActionState = {
    error?: string
    success?: string
    [key: string]: any
};

// ZodType<input,output> input represents expected input and output represents transformed or validated/parsed output. for dynamic validation here any is used
type ValidationActionFunction<S extends z.ZodType<any,any>,T>=(
    schema: z.infer<S>,
    formData: FormData
)=> Promise<T>;