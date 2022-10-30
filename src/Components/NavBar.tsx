import { NavLink } from "react-router-dom";
import "../sass/pages/NavBar.scss";

const NavBar = () => {
  return (
    <nav className="main_nav">
      <div id="main_logo"></div>
      <div id="main_hamburger"></div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/destination">Destination</NavLink>
          <NavLink to="/crew">Crew</NavLink>
          <NavLink to="/technology">Technology</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
