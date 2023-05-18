import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import NotFound from "../Others/NotFound";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: "/myToys",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: "/addToys",
          element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signIn",
            element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ]);

  export default router;