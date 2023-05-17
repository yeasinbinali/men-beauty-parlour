import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AppointmentContainer from "../../pages/AppointmentContainer/AppointmentContainer";
import AddService from "../../pages/Dashboard/AddService/AddService";
import AllUser from "../../pages/Dashboard/AllUsers/AllUser";
import GivenReview from "../../pages/Dashboard/GivenReview/GivenReview";
import MyAppointment from "../../pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../pages/Dashboard/Payment/Payment";
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
        path: '/dashboard/myAppointment',
        element: <MyAppointment></MyAppointment>
      },
      {
        path: '/dashboard/allUser',
        element: <AllUser></AllUser>
      },
      {
        path: '/dashboard/addService',
        element: <AddService></AddService>
      },
      {
        path: '/dashboard/givenReview',
        element: <GivenReview></GivenReview>
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: async({params}) => 
          fetch(`http://localhost:5000/bookings/${params.id}`)
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
