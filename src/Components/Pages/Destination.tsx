import "../../sass/pages/Destination.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { planets } from "../Data";

const Destination = ({ props }: any) => {
  const { isOpen, setOpen } = props;
  const [loaded, setLoaded] = useState<boolean>(false);
  const [singlePlanet, setSinglePlanet] = useState(planets[0]);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  const setPlanet = (nameMatch: string) => {
    let newPlanet = planets.filter((planet) => planet.name == nameMatch);
    setSinglePlanet(newPlanet[0]);
  };

  return (
    <div id="destination" className={loaded ? "loaded" : ""}>
      <motion.div style={{ opacity: isOpen ? 0 : 1 }}>
        <p>
          <span>01</span>pick your destination
        </p>
        <ul>
          <li
            className="active"
            onClick={(e: any) => setPlanet(e.target.innerText)}
          >
            MOON
          </li>
          <li onClick={(e: any) => setPlanet(e.target.innerText)}>MARS</li>
          <li onClick={(e: any) => setPlanet(e.target.innerText)}>EUROPA</li>
          <li onClick={(e: any) => setPlanet(e.target.innerText)}>TITAN</li>
        </ul>
        <div id="destination_planet">
          <img src={singlePlanet.img} alt="mars" />
          <p>{singlePlanet.name}</p>
          <p>{singlePlanet.text}</p>
          <div id="destination_planet_about">
            <div id="distance">
              <p>AVG. DISTANCE</p>
              <p>{singlePlanet.distance}</p>
            </div>
            <div id="travel">
              <p>EST. TRAVEL TIME</p>
              <p>{singlePlanet.travel}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Destination;
