import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "@/App";
import NotFoundPage from "@/pages/NotFoundPage";


const router=createBrowserRouter([{
  path:'/',
  element:<App />,
  errorElement:<NotFoundPage/>,
},
{
  path:'/:page',
  element:<App/>,
}
]);

export default function Provider() {
  return (
    <RouterProvider router={router}/>
  );
}
