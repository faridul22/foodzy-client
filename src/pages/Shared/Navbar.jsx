import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => { console.log(error) })
    }

    const navItems = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/allFoods">All Foods</Link>
        </li>
        <li>
            <Link to="/contact">Contact Us</Link>
        </li>
        <li>
            <Link to="/about">About Us</Link>
        </li>
        {user && <li>
            <Link to="/dashboard">Dashboard</Link>
        </li>}
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">FoodZy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>

                    <button onClick={handleLogOut} className="btn bg-green-600 text-white hover:bg-green-800 mx-5 normal-case">LogOut</button>
                    <div className="avatar">
                        <div className="w-[50px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {user.photoURL ?
                                <img title={user?.displayName} src={user.photoURL} /> :
                                <img title={user?.displayName} src="https://i.ibb.co/cLNMyCL/user-avata-removebg-preview.png" alt="user" />
                            }
                        </div>
                    </div>
                </> : <>
                    <Link className="btn bg-green-600 text-white hover:bg-green-800 border-0 mx-5" to="/login">Login</Link>
                </>
                }
            </div>
        </div>
    );
};

export default Navbar;