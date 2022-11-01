import { useEffect, useState } from "react";
import "../../sass/pages/Crew.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/scss/pagination";
import { crew } from "../Data";
import { motion } from "framer-motion";

const Crew = ({ props }: any) => {
  const { isOpen } = props;
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <div id="crew" className={loaded ? "loaded" : ""}>
      <motion.div style={{ opacity: isOpen ? 0 : 1 }}>
        <p>
          <span>02 </span> meet your crew
        </p>
        <Swiper
          spaceBetween={200}
          pagination={{
            clickable: true,
            bulletClass: "pagination",
            bulletActiveClass: "pagination-active",
          }}
          modules={[Pagination]}
          className="swiper"
        >
          {crew.map((person, index) => (
            <SwiperSlide key={index}>
              <div id="crew_person">
                <p id="crew_person_role">{person.role}</p>
                <p id="crew_person_name">{person.name}</p>
                <img src={person.images.png} />
                <p id="crew_person_bio">{person.bio}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Crew;
