import { NavLink } from "react-router-dom";
import "../sass/pages/NavBar.scss";
import { useReducedMotion, motion } from "framer-motion";

const NavBar = ({ props }: any) => {
  const { isOpen, setOpen } = props;
  const shouldReduceMotion = useReducedMotion();
  let animate;
  return (
    <nav className="main_nav">
      <div id="main_logo"></div>
      <div
        onClick={() => {
          setOpen(!isOpen);
        }}
        id="main_hamburger"
      ></div>
      <motion.ul
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "visible" : "none",
        }}
      >
        <li onClick={() => setOpen(!isOpen)}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/destination">Destination</NavLink>
          <NavLink to="/crew">Crew</NavLink>
          <NavLink to="/technology">Technology</NavLink>
        </li>
      </motion.ul>
    </nav>
  );
};

export default NavBar;
