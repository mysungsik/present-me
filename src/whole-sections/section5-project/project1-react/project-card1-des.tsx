import styles from "./project-card1-des.module.css";

const ProjectDes1 = () => {
  return (
    <div className={styles.desc_div}>
      <div className={styles.title}>
        <p>&#128170; Do-Health 페이지</p>
      </div>
      <hr />
      <div className={styles.stack}>
        <p className={styles.sub_title}>&#128452; 기술 스택</p>
        <p>
          &#10004; 메인 기술 : React, React-Router, Typescipt, Redux-toolkit,
          FireBase
        </p>
        <p>&#10004; 인증 토큰 : FireBase-Auth, React-cookie </p>
        <p>&#10004; 라이브러리 : Full-Calendar API(달력)</p>
        <p>
          &#10004; 애니메이션 : React-animation-on-scroll, Animated.css, CSS3,
          React-Transition-Group
        </p>
        <p> &#10004; 배포 : Vercel </p>
      </div>
      <hr />
      <div className={styles.key_point}>
        <p className={styles.sub_title}>&#127775; 주요 기능</p>
        <p>&#10004; 로그인과 회원가입</p>
        <p>&#10004; 운동 방법을 알려주는 Do-Part + </p>
        <p>
          &#10004; AMR 을 계산해주고, 감량에 필요한 열량을 알려주는, Do-Loss -
        </p>
        <p>&#10004; 적절한 식단을 알려주는 Do-Eat +</p>
        <p>&#10004; 로그인 후, 식단을 적을 수 있는, 캘린더 기능</p>
      </div>

      <hr />
      <div className={styles.summary}>
        <p className={styles.sub_title}>&#128206;Summary</p>
        <p>
          처음 헬스를 시작할때, 하고는 싶지만 막막했던 그 시간을 떠올리면서
          만들어 보았습니다.
        </p>
        <p>
          리액트를 시작하면서, 첫 Next.js 를 끝마치고, 리액트의 지식이 충분치
          않다고 느꼈습니다.
        </p>
        <p>
          또한, 만들면서, 수많은 props Drilling 을 사용하며, 업데이트를 하려
          했을때, 막막함을 느꼈습니다
        </p>
        <p>
          그래서, 리액트와 함께, 타입스크립트, 리덕스를 통해 언제든 관리하기
          편한 코드를 만들고자 하였습니다
        </p>
        <p></p>
      </div>
      <hr />
      <div className={styles.study}>
        <p className={styles.sub_title}>&#9999; Study </p>
        <p>
          &#10004; 리액트를 되돌아보며, React-Router 와 React-Hook 들의 사용에
          익숙해졌습니다.
        </p>
        <p>
          &#10004; 리덕스 툴킷과 타입스크립트를 함께 사용하는 방법을 익혔습니다.
        </p>
        <p>
          &#10004; 리덕스 툴킷의 비동기 함수를 사용하면서, Thunk 의 사용에
          익숙해졌습니다.
        </p>
        <p>
          &#10004; 애니메이션과, 캘린더 라이브러리를 사용하면서, DOCS 를 보는
          법에 익숙해졌습니다.
        </p>
        <p>
          &#10004; 라이브러리 안의 코드들을 조금씩 뜯어보고, 조금씩 필요한 만큼
          고치는 방법을 배웠습니다.
        </p>
        <p>
          &#10004; 파이어베이스를 사용하고, 파이어베이스-AUTH 를 통해, 외부에
          구축되어있는 서버에 API 를 사용해보았습니다.
        </p>
      </div>
      <hr />
      <div className={styles.deploy}>
        <p className={styles.sub_title}>&#127902;배포</p>
        <p>https://react-do-health-project-f28kyvvol-mysungsik.vercel.app/</p>
        <p> https://github.com/mysungsik/react_Do-Health_Project </p>
      </div>
    </div>
  );
};
export default ProjectDes1;
