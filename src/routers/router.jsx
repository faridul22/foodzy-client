import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import UserInfo from "../pages/UserInfo/UserInfo";
import AddItem from "../pages/AddItem/AddItem";
import AllItems from "../pages/AllItems/AllItems";
import EditPage from "../pages/EditPage/EditPage";
import ItemDetails from "../pages/ItemDetails/ItemDetails";

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
            {
                path: "/itemDetails/:id",
                element: <ItemDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'dashboard',
                element: <UserInfo />
            },
            {
                path: 'addItem',
                element: <AddItem />
            },

            {
                path: 'allItems',
                element: <AllItems />
            },
            {
                path: 'allItems/edit/:id',
                element: <EditPage />,
                loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
            },

        ]
    }
]);

export default router;


