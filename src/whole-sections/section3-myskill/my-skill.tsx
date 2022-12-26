import styles from "./my-skill.module.css";
import bootstrap from "../../skills-svg/bootstrap.svg";
import git from "../../skills-svg/git.svg";
import github from "../../skills-svg/github.svg";
import javascript from "../../skills-svg/javascript.svg";
import mongodb from "../../skills-svg/mongodb.svg";
import nextjs from "../../skills-svg/nextdotjs.svg";
import nodejs from "../../skills-svg/nodedotjs.svg";
import react from "../../skills-svg/react.svg";
import redux from "../../skills-svg/redux.svg";
import typescript from "../../skills-svg/typescript.svg";

const MySkill = () => {
  return (
    <div className={styles.maindiv}>
      <h1>보유한 능력들</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3> 프론트엔드 </h3>
          <hr />
          <div className={styles.card_svgs}>
            <div>
              <img src={javascript} alt={"javascript"} />
              <p>자바스크립트</p>
            </div>
            <div>
              <img src={react} alt={"react"} />
              <p>리액트</p>
            </div>
            <div>
              <img src={typescript} alt={"typescript"} />
              <p>타입스크립트</p>
            </div>
            <div>
              <img src={nextjs} alt={"nextjs"} />
              <p>리액트</p>
            </div>
            <div>
              <img src={redux} alt={"redux"} />
              <p>리덕스</p>
            </div>
            <div>
              <img src={bootstrap} alt={"bootstrap"} />
              <p>부트스트랩</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <h3> 협업 툴 </h3>
          <hr />
          <div className={styles.card_svgs}>
            <div>
              <img src={git} alt={"git"} />
              <p>Git</p>
            </div>
            <div>
              <img src={github} alt={"github"} />
              <p>GitHub</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <h3> 백엔드 </h3>
          <hr />
          <div className={styles.card_svgs}>
            <div>
              <img src={mongodb} alt={"mongodb"} />
              <p>MongoDB</p>
            </div>
            <div>
              <img src={nodejs} alt={"nodejs"} />
              <p>Nodejs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MySkill;
