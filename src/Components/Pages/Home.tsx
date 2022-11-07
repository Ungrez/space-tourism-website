import "../../sass/pages/Home.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = ({ props }: any) => {
  const { isOpen } = props;
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <div id="main_home" className={loaded ? "loaded" : ""}>
      <motion.div id="main_home_desc" style={{ opacity: isOpen ? 0 : 1 }}>
        <div id="main_home_desc_text">
          <p>so, you want to travel to</p>
          <h1>space</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go outer space and not hover kind of on the edge of it.
            Well sit back and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <NavLink to="/space-tourism-website/destination">
          <button>Explore</button>
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Home;
