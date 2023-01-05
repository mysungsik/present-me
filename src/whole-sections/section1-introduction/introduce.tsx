import styles from "./introduce.module.css";

const Introduce = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.introduce}>
        <div className={styles.introduce_title}>
          <h1>
            안녕하세요. 신입 프론트 개발자
            <span className={styles.my_name}> 최명식 </span> 입니다.
          </h1>
        </div>
        <div className={styles.introduce_subtitle}>
          <h3> 리액트와 Next.js 의 사용을 선호합니다</h3>
        </div>
        <p> 읽기 좋은 코드와 깔끔한 디자인을 좋아합니다.</p>

        <p> 개발 블로그 주소 : https://dive-into-frontend.tistory.com/ </p>
        <p> GiuHub 주소 : https://github.com/mysungsik </p>
      </div>
      <div className={styles.image_div}>
        <img
          src={"images/introduce/icons8-user-100.png"}
          alt={"introImg"}
          className={styles.rotaion}
        />
      </div>
    </div>
  );
};

export default Introduce;
