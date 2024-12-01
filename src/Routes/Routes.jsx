import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import About from "../Pages/Home/About/About";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home> 
        },
        {
          path: '/about',
          element: <About></About>

        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'book/:id',
          element: <BookService></BookService>,
          loader: ({params})=>fetch(`http://localhost:4000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
       }
      ]
    },
  ]);

  export default router; 