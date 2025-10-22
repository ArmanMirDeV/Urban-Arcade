import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Register from "../Pages/Registration";
import MyProfile from "../Pages/MyProfile";
import Registration from "../Pages/Registration";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children:[ {
            index: true,
            element: <HomePage></HomePage>
        },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Register />
            }, {
                path: "/my-profile",
                element: <MyProfile />
            },
            {
                path: "/registration",
                element: <Registration />
            }
        
        ]
    }
])