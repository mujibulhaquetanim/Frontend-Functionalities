import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import NotFoundPage from './pages/NotFoundPage.tsx'

const router=createBrowserRouter([{
  path:'/',
  element:<App />,
  errorElement:<NotFoundPage/>,
},
{
  path:'/home',
  element:<App />,
}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
 </React.StrictMode>,
)
