import styles from "./study.module.css";

const Studies = () => {
  return (
    <div className={styles.maindiv}>
      <h1> 수강한 주요 강의, 서적 </h1>
      <p>
        100일 코딩 챌린지 - Web Development 부트캠프 강사 79.5시간 // 강사:
        Maximilian Schwarzmüller
      </p>
      <p>
        javaScript 완벽 가이드 : 초급 + 고급 마스터 과정 52시간 // 강사 :
        Maximilian Schwarzmüller
      </p>
      <p>
        React 완벽 가이드 with Redux, Next.js, TypeScript 50.5시간 // 강사:
        Maximilian Schwarzmüller
      </p>
      <p>
        Next.js & React - 완벽 정복 가이드 (incl. Two Paths!) 25시간 // 강사 :
        Maximilian Schwarzmüller
      </p>
      <p> 모던 자바스크립트 Deep Dive - 이웅모 저 </p>
    </div>
  );
};
export default Studies;
