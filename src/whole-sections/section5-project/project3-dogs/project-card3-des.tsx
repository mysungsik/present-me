import styles from "../project-card-des.module.css";

const ProjectDes3 = () => {
  return (
    <div className={styles.desc_div}>
      <div className={styles.title}>
        <p>&#127828; 심리와 강아지 프로젝트</p>
        <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>
          저장소 :
          <a href="https://github.com/mysungsik/personality-and-dogs">
            https://github.com/mysungsik/personality-and-dogs
          </a>
        </p>
      </div>
      <hr />
      <div className={styles.stack}>
        <p className={styles.sub_title}>&#128452; 기술 스택</p>
        <p>&#10004; 메인 기술 : Next.js, MongoDB</p>
        <p>&#10004; 인증 토큰 : Next-auth, googleOAuth </p>
        <p>&#10004; CSS 처리기 : SASS </p>
        <p>&#10004; 그래프 : Rechart</p>
        <p> &#10004; 배포 : Vercel </p>
      </div>
      <hr />
      <div className={styles.key_point}>
        <p className={styles.sub_title}>&#127775; 주요 기능</p>
        <p>&#10004; Google 로그인 </p>
        <p>&#10004; 성격 테스트 </p>
        <p>&#10004; 테스트 결과를 나타내고, 적절한 반려견 추천 기능</p>
        <p>&#10004; 테스트 다시보기 기능</p>
        <p>&#10004; 기타 강아지 찾기 기능</p>
      </div>

      <hr />
      <div className={styles.summary}>
        <p className={styles.sub_title}>&#128206;Summary</p>
        <p>
          P&D 는 당신의 성격을 바탕으로 적절한 견종을 추천해드립니다. 현재
          두가지의 성격 테스트가 가능합니다.
        </p>
        <p>Number Test 와 DISC Test 를 통해 당신의 성격을 확인하세요.</p>
        <p>확인된 성격을 바탕으로 적절한 반려견의 견종을 추천해드립니다!</p>
      </div>
      <hr />
      <div className={styles.study}>
        <p className={styles.sub_title}>&#9999; Study </p>
        <p>
          &#10004; Next.js 를 사용해보며, REST API 를 이용한 DB 와의 CRUD 및,
          GoogleOauth 와 같은 외부 서버와 통신을 해보았습니다.
        </p>
        <p>
          &#10004; MonogoDB의 $regex, $in, $or 등의 조건문을 사용하며 CRUD 를
          진행할 수 있었습니다.
        </p>
        <p>
          &#10004; 기존의 시행착오를 줄이고자, 데이터베이스를 먼저 설계하고
          작업을 진행할 수 있었습니다.
        </p>
        <p>
          &#10004; 전역으로 값을 전달하는건 상태관리 라이브러리 뿐 아니라는 것을
          깨닫고
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;로컬 스토리지와 쿠키를 적절히 활용하게
          되었습니다.
        </p>
        <p>
          &#10004; Modal, Card, Component 등 코드의 재사용 가능성에 염두하며,
          모듈화에 대해 더 알게되었습니다.
        </p>
        <p>
          &#10004; CSS 전처리기인 SASS 를 사용하며 SCSS 구문에 익숙해졌습니다.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; & 나 $ 뿐 아니라, @use 와 @include, @if, @for
          같은 조건문 사용에 익숙해졌습니다.
        </p>

        <p>
          &#10004; SSG와 SSR 의 구동방식과 순서를 더 알게되었고, 그에 따라
          적절한 조치를 취할 수 있었습니다.
        </p>
      </div>
      <hr />
      <div className={styles.deploy}>
        <p className={styles.sub_title}>&#127902;배포</p>
        <a href="https://personality-and-dogs.vercel.app/">
          https://personality-and-dogs.vercel.app/
        </a>
      </div>
    </div>
  );
};
export default ProjectDes3;
