import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { planets } from "../Data";
import "../../sass/pages/Destination.scss";

const Destination = ({ props }: any) => {
  const { isOpen } = props;
  const [loaded, setLoaded] = useState<boolean>(false);
  const [singlePlanet, setSinglePlanet] = useState(planets[0]);
  const [active, setActive] = useState<number>(-1);
  const [anim, setAnim] = useState(false);

  const navItems = [
    { id: 0, target: "MOON" },
    { id: 1, target: "MARS" },
    { id: 2, target: "EUROPA" },
    { id: 3, target: "TITAN" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  const NavLink = ({
    id,
    target,
    isActive,
    onClick,
  }: {
    id: number;
    target: string;
    isActive: any;
    onClick: any;
  }) => (
    <p
      onClick={useCallback(() => onClick(id), [id])}
      className={isActive ? "active" : ""}
    >
      {target}
    </p>
  );

  const setPlanet = (nameMatch: string) => {
    setAnim(true);
    setTimeout(() => {
      let newPlanet = planets.filter((planet) => planet.name === nameMatch);
      setSinglePlanet(newPlanet[0]);
      setAnim(false);
    }, 500);
  };

  return (
    <div id="destination" className={loaded ? "loaded" : ""}>
      <motion.div style={{ opacity: isOpen ? 0 : 1 }}>
        <p>
          <span>01</span>pick your destination
        </p>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={(e: any) => setPlanet(e.target.innerText)}
            >
              <NavLink
                {...item}
                onClick={setActive}
                isActive={active === item.id}
              />
            </li>
          ))}
        </ul>
        <div id="destination_planet">
          {singlePlanet.img && (
            <motion.img
              style={{ right: anim ? "150%" : 0 }}
              src={singlePlanet.img}
              alt="mars"
            />
          )}
          <motion.p style={{ opacity: anim ? 0 : 1 }}>
            {singlePlanet.name}
          </motion.p>
          <motion.p style={{ opacity: anim ? 0 : 1 }}>
            {singlePlanet.text}
          </motion.p>
          <motion.div
            style={{ opacity: anim ? 0 : 1 }}
            id="destination_planet_about"
          >
            <div id="distance">
              {singlePlanet.distance && <p>AVG. DISTANCE</p>}
              <p>{singlePlanet.distance}</p>
            </div>
            <div id="travel">
              {singlePlanet.travel && <p>EST. TRAVEL TIME</p>}
              <p>{singlePlanet.travel}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Destination;
