"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useCallback } from "react";
import { onboardingSchema } from "@/types/schema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useSubmitDataStore } from "@/store/submitDataStore";

// only picked firstName and lastName fields from onboardingSchema
const onboardingNamesSchema = onboardingSchema.pick({
  firstName: true,
  lastName: true,
});
type onboardingNamesSchemaType = z.infer<typeof onboardingNamesSchema>;

export default function NamesForm() {
  const router = useRouter();
  const form = useForm<onboardingNamesSchemaType>({
    resolver: zodResolver(onboardingNamesSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const setData = useSubmitDataStore((state) => state.setData);

  const onSubmit = useCallback(
    (data: onboardingNamesSchemaType) => {
      console.log(data);
      setData(data);
      router.replace("/onboarding/password");
    },
    [router]
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-8"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="firstName" {...field} />
              </FormControl>

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
                <Input placeholder="lastName" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-10">
          Next
        </Button>
      </form>
    </Form>
  );
}
