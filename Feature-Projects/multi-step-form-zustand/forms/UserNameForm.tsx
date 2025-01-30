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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useSubmitDataStore } from "@/store/submitDataStore";

// Picked fields from onboardingSchema
const onboardingUserNamesSchema = onboardingSchema.pick({
  username: true,
  terms: true,
});

type onboardingUserNamesSchemaType = z.infer<typeof onboardingUserNamesSchema>;

export default function UserNameForm() {
  const router = useRouter();
  const form = useForm<onboardingUserNamesSchemaType>({
    resolver: zodResolver(onboardingUserNamesSchema),
    defaultValues: {
      username: "",
      terms: false,
    },
  });

  const setData = useSubmitDataStore((state) => state.setData);
  const firstName = useSubmitDataStore((state) => state.firstName);
  const lastName = useSubmitDataStore((state) => state.lastName);
  const password = useSubmitDataStore((state) => state.password);
  const confirmPassword = useSubmitDataStore((state) => state.confirmPassword);

  const onSubmit = useCallback(
    (data: onboardingUserNamesSchemaType) => {
      setData(data);
      console.log({ ...data, firstName, lastName, password, confirmPassword });
      // router.replace("/profile");
    },
    [router]
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
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
              <div className="flex items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked)}
                  />
                </FormControl>
                <FormLabel className="text-sm">
                  I agree to the terms and conditions.
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
