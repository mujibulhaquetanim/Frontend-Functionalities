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
import { Checkbox } from "@radix-ui/react-checkbox";
import { Input } from "@/components/ui/input";

// only picked firstName and lastName fields from onboardingSchema
const onboardingUserNamesSchema = onboardingSchema.pick({
  username: true,
  terms: true,
});
type onboardingUserNamesSchemaType = z.infer<typeof onboardingUserNamesSchema>;

export default function UserNameForm() {
  const form = useForm<onboardingUserNamesSchemaType>({
    resolver: zodResolver(onboardingUserNamesSchema),
    defaultValues: {
      username: "",
      terms: false,
    },
  });

  const onSubmit = (data: onboardingUserNamesSchemaType) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <div className="space-y-1 leading-none">
              <FormLabel>I agree to the terms and conditions.</FormLabel>
              </div>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
