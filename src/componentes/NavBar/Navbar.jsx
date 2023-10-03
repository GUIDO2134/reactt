import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="NavBar">
      <link to="/">
        <h3>KingKell</h3>
      </link>
      <div className="categories">
        <NavLink
          to={`/category/celular`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Celulares
        </NavLink>
        <NavLink
          to={`/category/Computadoras`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Computadoras
        </NavLink>
        <NavLink
          to={`/category/Tablets`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Tablets
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
