import styles from "../project-card.module.css";
import ProjectDes1 from "./project-card2-des";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Project2: React.FC<{ popupProject: () => void; state: string }> = (
  props
) => {
  const { popupProject, state } = props;

  const stylesName = `${styles.image_div} ${styles[state]}`;

  return (
    <div className={styles.main_div}>
      <button onClick={popupProject}>Close</button>
      <div className={stylesName}>
      <Swiper pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <img src="/images/project2/1.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project2/2.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project2/3.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project2/4.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project2/5.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project2/6.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project2/7.JPG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project2/8.JPG" alt={"main"} />
          </SwiperSlide>
        </Swiper>
      </div>
      <ProjectDes1 />
    </div>
  );
};

export default Project2;
