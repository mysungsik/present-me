import styles from "./greeting.module.css";

const Greeting: React.FC<{ showOthers: () => void; state: string }> = (
  props
) => {
  const { showOthers, state } = props;

  const classNames = `${styles.maindiv} ${styles[state]}`;
  return (
    <div className={classNames}>
      <div className={styles.main_content}>
        <div className={styles.main_content_text}>
          <h1> 안녕하세요, </h1>
          <h1> 프론트엔드 개발자 </h1>
          <h1> 최명식 입니다</h1>
          <h1> 방문해 주셔서 감사합니다</h1>
        </div>
      </div>
      <button onClick={showOthers} className={styles.down_arrow}>
        <img src="images/introduce/icons8-down-arrow-65.png"></img>
      </button>
    </div>
  );
};

export default Greeting;
