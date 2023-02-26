import styles from "./my-skills.module.css";
import SkillItem from "./skill-item";
import { skillFronted, skillCooperation, skillBackend } from "./skill-data";

const MySkill = () => {
  return (
    <div className={styles.maindiv}>
      <h1>보유한 능력들</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3> 프론트엔드 </h3>
          <hr />
          {skillFronted.map((item) => (
            <SkillItem
              key={item.image}
              image={item.image}
              alt={item.alt}
              desc={item.desc}
            />
          ))}
        </div>
        <div className={styles.card}>
          <h3> 협업 및 기타</h3>
          <hr />
          {skillCooperation.map((item) => (
            <SkillItem
              key={item.image}
              image={item.image}
              alt={item.alt}
              desc={item.desc}
            />
          ))}
        </div>
        <div className={styles.card}>
          <h3> 백엔드 </h3>
          <hr />
          {skillBackend.map((item) => (
            <SkillItem
              key={item.image}
              image={item.image}
              alt={item.alt}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      <p className={styles.sub_desc}>
        활용도는 매우 주관적이며, 가장 자신있는 React 와 MongoDB 를 기준으로
        작성되었습니다.
      </p>
    </div>
  );
};
export default MySkill;
