import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "./../Layout/Layout";
import Blog from "./../Pages/Blog/Blog";
import Login from "./../Pages/Login/Login";
import Signup from "./../Pages/Signup/Signup";
import ServiceDetails from "./../Pages/ServiceDetails/ServiceDetails";
import Services from "./../Pages/Services/Services";

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
        loader: () => fetch(`http://localhost:5000/services`),
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
