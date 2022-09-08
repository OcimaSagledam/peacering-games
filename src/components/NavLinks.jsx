
import { Link, useLocation } from "react-router-dom";

export default function NavLinks({ marginBottom = "mb-0" }) {
    const location = useLocation();

    return <>
        <span className={`transition ${location.pathname === "/" ? "text-[#FF6161]" : "hover:text-[#FF6161]"} ${marginBottom}`}>
            <Link to="/">Home</Link>
        </span>
        <span className={`transition ${location.pathname === "/store" ? "text-[#FF6161]" : "hover:text-[#FF6161]"} ${marginBottom}`}>
            <Link to="/store">Store</Link>
        </span>
        <span className={`transition ${location.pathname === "/blog" ? "text-[#FF6161]" : "hover:text-[#FF6161]"} ${marginBottom}`}>
            <Link to="/blog">Blog</Link>
        </span>
        <span className={`transition ${location.pathname === "/support" ? "text-[#FF6161]" : "hover:text-[#FF6161]"} ${marginBottom}`}>
            <Link to="/support">Support</Link>
        </span>
    </>
}