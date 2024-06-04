import { Link, Outlet } from "react-router-dom";
// import Navbar from "../components/Shared/Navbar";


const DashboardLayout = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <div className="w-[90%]">
                        <Outlet />
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <Link to="">Manage Profile</Link>
                        </li>
                        <li>
                            <Link to="allItems">All Items</Link>
                        </li>
                        <li>
                            <Link to="addItem">Add A Item</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashboardLayout;