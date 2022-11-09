import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "./../Layout/Layout";
import Blog from "./../Pages/Blog/Blog";
import Login from "./../Pages/Login/Login";
import Signup from "./../Pages/Signup/Signup";
import ServiceDetails from "./../Pages/ServiceDetails/ServiceDetails";
import Services from "./../Pages/Services/Services";
import MyReview from "./../Pages/MyReview/MyReview";
import AddService from "./../Pages/AddService/AddService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateReview from "../Pages/MyReview/UpdateReview/UpdateReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch(
            `https://rainbow-photography-server-nasim0994.vercel.app/services`
          ),
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://rainbow-photography-server-nasim0994.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `https://rainbow-photography-server-nasim0994.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
