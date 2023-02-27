import styles from "../project-card-des.module.css";

const ProjectDes2 = () => {
  return (
    <div className={styles.desc_div}>
      <div className={styles.title}>
        <p>&#127828; 오늘 뭐먹지 페이지</p>
        <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>
          저장소 :
          <a href="https://github.com/mysungsik/nextjs_what_should_eat-project">
            https://github.com/mysungsik/nextjs_what_should_eat-project
          </a>
        </p>
      </div>
      <hr />
      <div className={styles.stack}>
        <p className={styles.sub_title}>&#128452; 기술 스택</p>
        <p>&#10004; 메인 기술 : Next.js, MongoDB</p>
        <p>&#10004; 인증 토큰 : Next-auth </p>
        <p>&#10004; 애니메이션 : Swiper</p>
        <p> &#10004; 배포 : Vercel </p>
      </div>
      <hr />
      <div className={styles.key_point}>
        <p className={styles.sub_title}>&#127775; 주요 기능</p>
        <p>&#10004; 로그인과 회원가입, 회원정보 변경</p>
        <p>&#10004; 모든 음식 검색하기 </p>
        <p>&#10004; 카테고리별, 태그별로, 음식 선택하기</p>
        <p>&#10004; 음식 랜덤 선택기 기능</p>
        <p>&#10004; 칼로리 계산기 기능</p>
        <p>&#10004; 로그인 후, 음식 찜 하기 기능</p>
        <p>&#10004; 로그인 후, 찜한 음식에서 랜덤 선택기 기능</p>
      </div>

      <hr />
      <div className={styles.summary}>
        <p className={styles.sub_title}>&#128206;Summary</p>
        <p>매일 "점심 뭐먹을까" 고민하는 분들을 위해 만들어 보았습니다.</p>
        <p>고민하는 분들을 위해, 랜덤으로 음식을 하나골라주고</p>
        <p>식단이 고민인 분들을 위해, 음식의 영양성분을 알려줍니다.</p>
        <p>자주 먹고싶은 음식은 찜 기능을 통하여, 자주 볼 수 있습니다.</p>
      </div>
      <hr />
      <div className={styles.study}>
        <p className={styles.sub_title}>&#9999; Study </p>
        <p>
          &#10004; Next.js 를 사용해보며, REST API 를 만들어, 서버와
          통신해보았습니다.
        </p>
        <p>
          &#10004; 리액트 훅의 라이프사이클과, 사용법에 대해 조금 더 배웠습니다.
        </p>
        <p>
          &#10004; 모듈화에 신경 썼지만, 크게 정돈된 코드가 나오지 않았습니다.
          덕분에 구조에 대해 더욱 신경쓰게 되었습니다.
        </p>
        <p>&#10004; CSS 애니메이션에 대해 입문했습니다.</p>

        <p>
          &#10004; Next-Auth 를 통해, 직접 로그인 로직을 꾸미고, Req 와 Res 를
          스스로 처리해보았습니다.
        </p>
        <p>
          &#10004; 수많은 Props Drilling 을 통해, 상태 관리의 중요성을
          깨달았습니다.
        </p>
        <p>&#10004; func.bind() 등 자바스크립트의 기능에 대해 공부했습니다.</p>
      </div>
      <hr />
      <div className={styles.deploy}>
        <p className={styles.sub_title}>&#127902;배포</p>
        <a href="https://nextjs-personal-project-inky.vercel.app/">
          https://nextjs-personal-project-inky.vercel.app/
        </a>
      </div>
    </div>
  );
};
export default ProjectDes2;
