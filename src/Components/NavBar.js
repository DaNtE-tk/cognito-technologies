import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    return (
        <header className="d-flex px-3">
            <div className="logo h-100">
                <img className="h-100 object-fit-contain" src="/logo.png" alt="logo" />
            </div>
            <div className="navbar w-100 d-flex justify-content-end align-items-center flex-grow-1 flex-shrink-1">
                <nav className="d-flex align-items-center">
                    <ul className="d-flex gap-4 justify-content-around mb-0">
                        <li>
                            <Link className={(location.pathname === "/home" || location.pathname === "/home/") ? "active" : ""} to={"/home"}>Home</Link>
                        </li>
                        <li>
                            <Link className={(location.pathname === "/intro" || location.pathname === "/intro/") ? "active" : ""} to={"/intro"}>Who We Are</Link>
                        </li>
                        <li>
                            <Link className={(location.pathname === "/whatwedo" || location.pathname === "/whatwedo/") ? "active" : ""} to={"/whatwedo"}>What We Do</Link>
                        </li>
                        <li>
                            <Link className={(location.pathname === "/products" || location.pathname === "/products/") ? "active" : ""} to={"/products"}>Products</Link>
                        </li>
                        <li>
                            <Link className={(location.pathname === "/career" || location.pathname === "/career/") ? "active" : ""} to={"/career"}>Career</Link>
                        </li>
                        <li>
                            <Link className={(location.pathname === "/contact" || location.pathname === "/contact/") ? "active" : ""} to={"/contact"}><Button variant="dark">Contact Us</Button></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;