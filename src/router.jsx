import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import CreateUser from "./items/CreateUser";
import MinhaConta from "./items/MinhaConta";

const router  = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage/>,
    },
    {
        path: "/login",
        element: <Login />,
        children:[
            {
                path:"new",
                element: <CreateUser />,
            },
            {
                path:"/login",//
                element: <MinhaConta/>,
            },
        ],
    },
]);

export default router;