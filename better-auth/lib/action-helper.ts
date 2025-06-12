import { parse } from "path";
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

export function validatedAction<S extends z.ZodType<any,any>,T>(
    schema: S,
    action: ValidationActionFunction<S,T>
){
    return async (prevState: ActionState,formData: FormData)=>{
        const parsedResult = schema.safeParse(Object.fromEntries(formData));
        console.log(parsedResult);
        if (!parsedResult.success) {
        console.log(parsedResult.error.errors);
        return { error: parsedResult.error.errors[0].message } as T;
        }
        return action(parsedResult.data,formData);
    }
}