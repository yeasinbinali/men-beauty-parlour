import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AppointmentContainer from "../../pages/AppointmentContainer/AppointmentContainer";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Reviews from "../../pages/Reviews/Reviews/Reviews";
import Services from "../../pages/Services/Services/Services";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute><AppointmentContainer></AppointmentContainer></PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        }
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
