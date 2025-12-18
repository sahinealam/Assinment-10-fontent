import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";

import PriviteRoute from "../provider/PriviteRoute";
import Error from "../components/Error";
import Services from "../pages/Services";
import AnimalDetails from "../pages/AnimalDetails";
import AddServices from "../pages/AddServices";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services/:serviceId",
        element: (
          <PriviteRoute>
            <AnimalDetails></AnimalDetails>
          </PriviteRoute>
        ),
      },
      {
        path: "/myprofile",
        element: (
          <PriviteRoute>
            <MyProfile></MyProfile>
          </PriviteRoute>
        ),
      },
      {
        path: "/addservices",
        element: (
          <PriviteRoute>
            <AddServices></AddServices>
          </PriviteRoute>
        ),
      },
     
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default router;
