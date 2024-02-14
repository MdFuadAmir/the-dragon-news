import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsPage from "../Pages/NewsPage/NewsPage";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivetRoute><NewsPage></NewsPage></PrivetRoute>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);
export default router; 