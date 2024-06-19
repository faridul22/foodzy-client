import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import Spinner from "../pages/Shared/Spinner";


const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar />
            <div>{navigation.state === "loading" ? <Spinner /> : <Outlet />}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;