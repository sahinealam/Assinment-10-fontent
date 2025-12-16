import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";

import PriviteRoute from "../provider/PriviteRoute";
import Error from "../components/Error";
import Animals from "../pages/Animals";
import AnimalDetails from "../pages/AnimalDetails";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/animals',
                element: <Animals></Animals>
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
                path: '/animals/:animalId',
                element: <PriviteRoute>
                   <AnimalDetails></AnimalDetails>
                </PriviteRoute>
            },
            {
                path: '/myprofile',
                element: <PriviteRoute>
                    <MyProfile></MyProfile>
                </PriviteRoute>
            },
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])

export default router;