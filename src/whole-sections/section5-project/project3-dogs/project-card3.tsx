import styles from "../project-card.module.css";
import ProjectDes3 from "./project-card3-des";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Project3: React.FC<{ popupProject: () => void; state: string }> = (
  props
) => {
  const { popupProject, state } = props;

  const stylesName = `${styles.image_div} ${styles[state]}`;

  return (
    <div className={styles.main_div}>
      <button onClick={popupProject}>Close</button>
      <div className={stylesName}>
        <Swiper
          spaceBetween={1}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src="/images/project3/4.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project3/5.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project3/8.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project3/9.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project3/10.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project3/6.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project3/11.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project3/12.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project3/13.JPG" alt={"main"} />
          </SwiperSlide>
        </Swiper>
      </div>
      <ProjectDes3 />
    </div>
  );
};

export default Project3;
