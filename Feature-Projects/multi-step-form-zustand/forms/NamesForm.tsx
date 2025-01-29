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
const onboardingNamesSchema = onboardingSchema.pick({
  firstName: true,
  lastName: true,
});
type onboardingNamesSchemaType = z.infer<typeof onboardingNamesSchema>;

export default function NamesForm() {
  const form = useForm<onboardingNamesSchemaType>({
    resolver: zodResolver(onboardingNamesSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data: onboardingNamesSchemaType) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <input placeholder="firstName" {...field} />
              </FormControl>
              <FormDescription>This is your first name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <input placeholder="lastName" {...field} />
              </FormControl>
              <FormDescription>This is your last name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
