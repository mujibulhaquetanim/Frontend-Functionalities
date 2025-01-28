"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
interface QueryProviderProps {
  children: React.ReactNode;
}
export default function QueryProvider({ children }: QueryProviderProps) {
  //the reason we are using useState is because we want to create a new instance of the QueryClient, it will ensure that data is not shared between different users and requests while creating the query client one per component lifecycle.
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

{
  /*
    this is a demo component for the QueryProvider which for the nextjs app.
    QueryProvider is a higher-order component that wraps the application's components in a QueryClientProvider. It creates a new instance of the QueryClient for each component lifecycle, ensuring that data is not shared between different users and requests. This is done by using the useState hook to create a new instance of the QueryClient each time the component is rendered. The QueryClientProvider is then used to provide the QueryClient to the application's components, allowing them to use the QueryClient for fetching and mutating data.
    now wrap the app with the QueryProvider in the root layout of nextjs app
    */
}
