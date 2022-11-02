import { NavLink } from "react-router-dom";
import "../sass/pages/NavBar.scss";

const NavBar = ({ props }: any) => {
  const { isOpen, setOpen } = props;

  return (
    <nav className="main_nav">
      <NavLink to="/" end>
        <div id="main_logo"></div>
      </NavLink>
      <div
        onClick={() => {
          setOpen(!isOpen);
        }}
        id="main_hamburger"
      ></div>
      <div id="line"></div>
      <ul className={isOpen ? "main_nav_links" : ""}>
        <li className={isOpen ? "active" : ""} onClick={() => setOpen(false)}>
          <NavLink to="/" end>
            <span>00</span> Home
          </NavLink>
          <NavLink to="/destination">
            <span>01</span> Destination
          </NavLink>
          <NavLink to="/crew">
            <span>02</span> Crew
          </NavLink>
          <NavLink to="/technology">
            <span>03</span> Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
