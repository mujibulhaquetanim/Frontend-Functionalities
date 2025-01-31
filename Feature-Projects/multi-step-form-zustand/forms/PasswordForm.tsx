"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { use, useCallback, useEffect } from "react";
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
const onboardingPasswordSchema = onboardingSchema.pick({
  password: true,
  confirmPassword: true,
});
type onboardingPasswordSchemaType = z.infer<typeof onboardingPasswordSchema>;

export default function PasswordForm() {
  const router = useRouter();
  const form = useForm<onboardingPasswordSchemaType>({
    resolver: zodResolver(onboardingPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const setData = useSubmitDataStore((state) => state.setData);
  const firstName = useSubmitDataStore((state) => state.firstName);
  const lastName = useSubmitDataStore((state) => state.lastName);

  const onSubmit = useCallback(
    (data: onboardingPasswordSchemaType) => {
      console.log(data);
      setData(data);
      router.replace("/onboarding/username");
    },
    [router]
  );

  // this is to prevent the user to come this page directly without going through name page
  //hasHydrated is used to check if the state has been hydrated or not and if it has not been hydrated then the user will be redirected to the name page. this is done as zustand when persist data is enabled, it is going to be undefined in the first render and then it will be hydrated the data from the local storage, which means we have to wait until the data is hydrated before we can proceed to the next page.
  useEffect(() => {
    if (!useSubmitDataStore.persist.hasHydrated) return;
    if (!firstName || !lastName) {
      router.replace("/onboarding/name");
    }
  }, [useSubmitDataStore.persist.hasHydrated, firstName, lastName]);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[300px] space-y-8"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>

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
                <Input type="password" placeholder="********" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
}
