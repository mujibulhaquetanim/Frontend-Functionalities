"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { signinSchema } from "@/schema/signinSchema";
import {
  handleCredentialSignIn,
  handleGithubSignIn,
} from "@/app/actions/authActions";
import { useState } from "react";
import ErrorMessage from "@/components/error-message";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Signin() {
  const [globalError, setGlobalError] = useState<string>("");
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signinSchema>) {
    try {
      const result = await handleCredentialSignIn(values);
      if (result?.message) {
        setGlobalError(result.message);
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  }

  return (
    <Card className="flex flex-col h-screen-minus-navbar justify-center items-center p-4">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Please enter your credentials</CardDescription>
      </CardHeader>
      <CardContent>
        {globalError && <ErrorMessage error={globalError} />}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="enter your email"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadingButton pending={form.formState.isSubmitting} />
          </form>
        </Form>

        <span className="text-sm text-gray-500 text-center block my-2">or</span>
        <form action={handleGithubSignIn}>
          <Button variant="outline" className="w-full" type="submit">
            <Github className="h-4 w-4 mr-2" />
            Sign in with Github
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
