import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import UserInfo from "../pages/UserInfo/UserInfo";
import AddItem from "../pages/AddItem/AddItem";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <UserInfo />
            },
            {
                path: 'addItem',
                element: <AddItem />
            },
        ]
    }
]);

export default router;


