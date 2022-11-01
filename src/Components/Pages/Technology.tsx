import { useEffect, useState } from "react";
import "../../sass/pages/Technology.scss";
import { technology } from "../Data";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/scss/pagination";

const Technology = ({ props }: any) => {
  const { isOpen } = props;
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <div id="technology" className={loaded ? "loaded" : ""}>
      <motion.div style={{ opacity: isOpen ? 0 : 1 }}>
        <p>
          <span>03</span>space launch 101
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
          <SwiperSlide>1</SwiperSlide>
          <SwiperSlide>1</SwiperSlide>
          <SwiperSlide>1</SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Technology;
