import { NavLink } from "react-router-dom";
import "./nav.css"
const Header = () => {
    return (
        <nav className="flex justify-center font-semibold gap-4 py-2 bg-yellow-100 w-full">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/meals">Meals</NavLink>
            <NavLink to="/simpleForm"> Form</NavLink>
            <NavLink to="/login"> Log in</NavLink>
        </nav>
    );
};

export default Header;