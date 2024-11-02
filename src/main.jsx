import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPAge/ErrorPage';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import BookDetail from './Components/BookDetail/bookDetail';
import Test from './Components/Test/Test';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
    path:'/',
  element:<Home></Home>
  },
  {
path:'books/:bookId',
element:<BookDetail></BookDetail>,
loader:()=>fetch("/data/booksData.json")
  },
  {
    path:"Dashboard",
    element:<Dashboard></Dashboard>
  },
  {
    path:"test/:testID",
    element:<Test></Test>
  },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
