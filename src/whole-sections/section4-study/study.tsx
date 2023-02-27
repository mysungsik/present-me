import styles from "./study.module.css";

const Studies = () => {
  return (
    <div className={styles.maindiv}>
      <h1> &#128214; 대외활동, 주요 수강 강의, 서적 </h1>

      <div className={styles.study_detail}>
        <hr />
        <div>
          <p>원티드 프리온보딩 프론트엔드 인턴십 -9차 [진행중]</p>
          <p className={styles.writer}> 원티드</p>
        </div>
        <hr />
        <div>
          <p>100일 코딩 챌린지 - Web Development 부트캠프 강사 [79.5시간]</p>
          <p className={styles.writer}> Maximilian Schwarzmüller</p>
        </div>
        <hr />
        <div>
          <p>javaScript 완벽 가이드 : 초급 + 고급 마스터 과정 [52시간]</p>
          <p className={styles.writer}>Maximilian Schwarzmüller</p>
        </div>
        <hr />
        <div>
          <p>React 완벽 가이드 with Redux, Next.js, TypeScript [50.5시간]</p>
          <p className={styles.writer}> Maximilian Schwarzmüller</p>
        </div>
        <hr />
        <div>
          <p>Next.js & React - 완벽 정복 가이드 (incl. Two Paths!) [25시간]</p>
          <p className={styles.writer}> Maximilian Schwarzmüller</p>
        </div>
        <hr />
        <div>
          <p> 모던 자바스크립트 Deep Dive</p>
          <p className={styles.writer}> 이웅모 저 </p>
        </div>
        <hr />
        <div>
          <p> 면접을 위한 CS 전공지식노트</p>
          <p className={styles.writer}> 주홍철 저 </p>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default Studies;
