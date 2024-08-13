import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    return (
    <header className="d-flex px-3">
        <div className="logo h-100">
            <img className="h-100 object-fit-contain" src="/logo.png" alt="logo"/>
        </div>
        <div className="navbar w-100 d-flex justify-content-end align-items-center flex-grow-1 flex-shrink-1">
            <nav className="d-flex align-items-center">
                <ul className="d-flex gap-4 justify-content-around mb-0">
                    <li><a className={(location.pathname === "/home" || location.pathname === "/home/") ? "active": ""} href="/home">Home</a></li>
                    <li><a className={(location.pathname === "/intro" || location.pathname === "/intro/") ? "active": ""} href="/intro">Who We Are</a></li>
                    <li><a className={(location.pathname === "/whatwedo" || location.pathname === "/whatwedo/") ? "active": ""} href="/whatwedo">What We Do</a></li>
                    <li><a className={(location.pathname === "/products" || location.pathname === "/products/") ? "active": ""} href="/products">Products</a></li>
                    <li><a className={(location.pathname === "/career" || location.pathname === "/career/") ? "active": ""} href="/career">Career</a></li>
                    <li><a className={(location.pathname === "/contact" || location.pathname === "/contact/") ? "active": ""} href="/contact"><Button variant="dark">Contact Us</Button></a></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}
 
export default NavBar;