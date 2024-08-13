import Footer from "./Footer";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
    <>
        <Navbar />
        {<Outlet />}
        <Footer />
    </>
    );
}
 
export default Layout;