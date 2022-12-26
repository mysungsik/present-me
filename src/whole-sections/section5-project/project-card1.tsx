import styles from "./project-card.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Project1: React.FC<{ popupProject: () => void; state: string }> = (
  props
) => {
  const { popupProject, state } = props;

  const stylesName = `${styles.maindiv} ${styles[state]}`;

  return (
    <div className={stylesName} onClick={popupProject}>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <h4> 오늘뭐먹지 -메인 (1/8)</h4>
          <img src="/images/project1/1main.JPG" alt={"main"} />
          <p> 사용 기술 : ...</p>
          <p> 목적 : ...</p>
          <p> 페이지 설명 : ...</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4> 오늘뭐먹지 - 로그인(2/8)</h4>
          <img src="/images/project1/2login.JPG" alt={"main"} />
          <p> 사용 기술 : ...</p>
          <p> 목적 : ...</p>
          <p> 페이지 설명 : ...</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4> 오늘뭐먹지 - 음식 선택기(3/8)</h4>
          <img src="/images/project1/3.selector.JPG" alt={"main"} />
          <p> 사용 기술 : ...</p>
          <p> 목적 : ...</p>
          <p> 페이지 설명 : ...</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4> 오늘뭐먹지 - 랜덤 선택기(4/8)</h4>
          <img src="/images/project1/4random1.JPG" alt={"main"} />
          <p> 사용 기술 : ...</p>
          <p> 목적 : ...</p>
          <p> 페이지 설명 : ...</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4> 오늘뭐먹지 - 랜덤 선택기(5/8)</h4>
          <img src="/images/project1/4random2.JPG" alt={"main"} />
          <p> 사용 기술 : ...</p>
          <p> 목적 : ...</p>
          <p> 페이지 설명 : ...</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4> 오늘뭐먹지 - 칼로리 계산기(6/8)</h4>
          <img src="/images/project1/5calcal.JPG" alt={"main"} />
          <p> 사용 기술 : ...</p>
          <p> 목적 : ...</p>
          <p> 페이지 설명 : ...</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4> 오늘뭐먹지 - 찜 하기(7/8)</h4>
          <img src="/images/project1/6favorites.JPG" alt={"main"} />
          <p> 사용 기술 : ...</p>
          <p> 목적 : ...</p>
          <p> 페이지 설명 : ...</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4> 오늘뭐먹지 - 찜 랜덤 선택기(8/8)</h4>
          <img src="/images/project1/7favroitesrandom.JPG" alt={"main"} />
          <p> 사용 기술 : ...</p>
          <p> 목적 : ...</p>
          <p> 페이지 설명 : ...</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project1;
