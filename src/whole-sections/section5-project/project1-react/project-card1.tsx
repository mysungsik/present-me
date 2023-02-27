import styles from "../project-card.module.css";
import ProjectDes1 from "./project-card1-des";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Project1: React.FC<{ popupProject: () => void; state: string }> = (
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
            <img src="/images/project1/1.PNG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project1/2.PNG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project1/3.PNG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project1/4.PNG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project1/5.PNG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project1/6.PNG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project1/7.PNG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project1/8.PNG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project1/9.PNG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project1/10.PNG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project1/11.PNG" alt={"main"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/project1/12.PNG" alt={"main"} />
          </SwiperSlide>
        </Swiper>
      </div>
      <ProjectDes1 />
    </div>
  );
};

export default Project1;
