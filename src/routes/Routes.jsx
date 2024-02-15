import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsPage from "../Pages/NewsPage/NewsPage";
import PrivetRoute from "./PrivetRoute";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";


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
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            }
        ]
    }
]);
export default router; 