"use client";
import React from "react";
import { useSubmitDataStore } from "@/store/submitDataStore";

// we can use the selector to get the data
export default function page() {
  const { setData, ...state } = useSubmitDataStore();
  return (
    <div>
      <h1 className="text-3xl font-bold">Account Created</h1>
      <p className="text-lg">
        Thank you for creating an account. You can now log in.
      </p>
      <p className="text-lg">Your Profile information are:</p>
      <p className="text-lg">Username: {state.username}</p>
      <p className="text-lg">Name: {state.firstName}</p>
      <p className="text-lg">Email: {state.lastName}</p>
      <p className="text-lg">Password: {state.password}</p>
    </div>
  );
}
