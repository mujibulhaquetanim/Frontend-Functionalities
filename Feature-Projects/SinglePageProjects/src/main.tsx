import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PhotoUploadingApp from "./Projects/Photo Uploading/PhotoUploadingApp";
import DirList from "./Projects/RecurssiveFolders/DirList";
import ScrollSpyApp from "./Projects/Scroll Spy/ScrollSpyApp";
import TypescriptConcepts from "./Text/TypescriptConcepts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div> 404 error</div>,
    children: [
      {
        path: "/PhotoUploadingApp",
        element: <PhotoUploadingApp />,
      },
      {
        path: "/dirlist",
        element: <DirList />,
      },
      {
        path: "/scrollspy",
        element: <ScrollSpyApp />,
      },
      {
        path: "/test",
        element: <TypescriptConcepts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
