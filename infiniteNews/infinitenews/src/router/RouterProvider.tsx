import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App";
import NotFoundPage from "@/pages/NotFoundPage";

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
    path, //path:path ->as both property and value are same name, no need to mention path:path.
    element: <App />,
    errorElement: <NotFoundPage />,
  })),
]);

export default function Provider() {
  return <RouterProvider router={router} />;
}
