import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PriveteRoute from "./PriveteRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "book/:id",
        element: <PriveteRoute><BookService></BookService></PriveteRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "bookings",
        element: <PriveteRoute> <Bookings></Bookings> </PriveteRoute>,
      },
    ],
  },
]);

export default router;
