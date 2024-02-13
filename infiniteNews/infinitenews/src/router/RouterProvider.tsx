import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App";
import NotFoundPage from "@/components/custom/pages/NotFoundPage";

const allowedPaths:string[] = [
  "/",
  "/General",
  "/Business",
  "/Entertainment",
  "/Health",
  "/Science",
  "/Sports",
  "/Technology",
];

const router = createBrowserRouter([
  ...allowedPaths.map((path) => ({
    path,
    element: <App />,
    errorElement: <NotFoundPage />,
  })),
]);

export default function Provider() {
  return <RouterProvider router={router} />;
}
