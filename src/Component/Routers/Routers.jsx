import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Layout/MainRoot";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot></MainRoot>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
]);
export default router