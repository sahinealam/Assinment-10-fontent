import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";

import PriviteRoute from "../provider/PriviteRoute";
import Error from "../components/Error";
import AddServices from "../pages/AddServices";

import MyServices from "../pages/MyServices";
import UpdateService from "../pages/UpdateService";
import MyOrders from "../pages/MyOrders";
import ServicesDetails from "../pages/ServicesDetails";
import PetsSupplies from "../pages/PetsSupplies";
import CategoryFilteredProducts from "../components/CategoryFilteredProducts";

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
        path: "/allservices",
        element: <PetsSupplies></PetsSupplies>,
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
            <ServicesDetails></ServicesDetails>
          </PriviteRoute>
        ),
      },

      // Category Filtered Products Route
      {
        path: "category-filtered-product/:categoryName",
        element: (
          <PriviteRoute>
            <CategoryFilteredProducts />
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
        path: "/my-orders",
        element: (
          <PriviteRoute>
            <MyOrders></MyOrders>
          </PriviteRoute>
        ),
      },
      {
        path: "/add-services",
        element: (
          <PriviteRoute>
            <AddServices></AddServices>
          </PriviteRoute>
        ),
      },
      {
        path: "/my-services",
        element: (
          <PriviteRoute>
            <MyServices></MyServices>
          </PriviteRoute>
        ),
      },
      {
        path: "/update-service/:id",
        element: (
          <PriviteRoute>
            <UpdateService></UpdateService>
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



