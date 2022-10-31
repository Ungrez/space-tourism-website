import "../../sass/pages/Destination.scss";
import mars from "../../assets/destination/image-mars.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Destination = ({ props }: any) => {
  const { isOpen, setOpen } = props;
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <div id="destination" className={loaded ? "loaded" : ""}>
      <motion.div style={{ opacity: isOpen ? 0 : 1 }}>
        <p>
          <span>01</span>pick your destination
        </p>
        <ul>
          <li className="active">MOON</li>
          <li>MARS</li>
          <li>EUROPA</li>
          <li>TITAN</li>
        </ul>
        <div id="destination_planet">
          <img src={mars} alt="mars" />
          <p>MARS</p>
          <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
          <div id="destination_planet_about">
            <div id="distance">
              <p>AVG. DISTANCE</p>
              <p> 225 MIL. KM</p>
            </div>
            <div id="travel">
              <p>EST. TRAVEL TIME</p>
              <p>9 MONTHS</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Destination;
