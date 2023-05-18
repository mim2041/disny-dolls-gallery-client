import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import NotFound from "../Others/NotFound";


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