"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import { onboardingSchema } from "@/types/schema";
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
import { Button } from "@/components/ui/button";

// only picked firstName and lastName fields from onboardingSchema
const onboardingPasswordSchema = onboardingSchema.pick({
  password: true,
  confirmPassword: true,
});
type onboardingPasswordSchemaType = z.infer<typeof onboardingPasswordSchema>;

export default function PasswordForm() {
  const form = useForm<onboardingPasswordSchemaType>({
    resolver: zodResolver(onboardingPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: onboardingPasswordSchemaType) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <input placeholder="password" {...field} />
              </FormControl>
              <FormDescription>This is your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <input placeholder="confirmPassword" {...field} />
              </FormControl>
              <FormDescription>This is your confirm password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
