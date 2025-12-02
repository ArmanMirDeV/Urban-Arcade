import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Register from "../Pages/Registration";
import MyProfile from "../Pages/MyProfile";
import Registration from "../Pages/Registration";
import GameDetails from "../Pages/GameDetails";
import AllGames from "../Pages/AllGames";
import ForgetPass from "../Pages/ForgetPass";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "../Provider/PrivateRoute";
import UpdateProfile from "../Pages/UpdateProfile";
import Events from "../Pages/Events";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/game/:id",
        element: <GameDetails></GameDetails>,
      },
      {
        path: "/all-games",
        element: <AllGames />,
      },
      {
        path: "/forget-Pass",
        element: <ForgetPass />,
      },
      {
        path: "/update-user",
        element: <UpdateProfile />,
      },
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
]);
