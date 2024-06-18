import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import AddItem from "../pages/AddItem/AddItem";
import AllItems from "../pages/AllItems/AllItems";
import EditPage from "../pages/EditPage/EditPage";
import ItemDetails from "../pages/ItemDetails/ItemDetails";
import ManageProfile from "../pages/ManageProfile/ManageProfile";
import EditProfile from "../pages/EditProfile/EditProfile";
import PrivateRoutes from "./PrivateRoutes";
import Contact from "../pages/Contact/Contact";
import AllFoods from "../pages/AllFoods/AllFoods";
import About from "../pages/About/About";

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
                loader: ({ params }) => fetch(`https://foodzy-server.onrender.com/items/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/allFoods',
                element: <AllFoods />,
                loader: () => fetch(`https://foodzy-server.onrender.com/items`)
            },
            {
                path: '/about',
                element: <About />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <PrivateRoutes><ManageProfile></ManageProfile></PrivateRoutes>
            },
            {
                path: 'addItem',
                element: <PrivateRoutes><AddItem /></PrivateRoutes>
            },
            {
                path: 'edit/:id',
                element: <PrivateRoutes><EditProfile /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://foodzy-server.onrender.com/user/get/${params.id}`)
            },

            {
                path: 'allItems',
                element: <AllItems />
            },
            {
                path: 'allItems/edit/:id',
                element: <EditPage />,
                loader: ({ params }) => fetch(`https://foodzy-server.onrender.com/items/${params.id}`)
            },

        ]
    }
]);

export default router;


