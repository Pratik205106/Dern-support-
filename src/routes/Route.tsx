import { createBrowserRouter } from "react-router";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../pages/Home";
import RequestPerformance from "../pages/RequestPerformance";
import Article from "../pages/Article";
import User from "../pages/User";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/request',
                element:<RequestPerformance/>,
            },
            {
                path:'/article',
                element:<Article/>,
            },
            {
                path:'/user',
                element:<User/>,
            },

        ],
    },
]);