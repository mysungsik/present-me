import styles from "./projects.module.css";
import Project1 from "./project1-react/project-card1";
import Project2 from "./project2-next/project-card2";
import { Transition } from "react-transition-group";
import { useState } from "react";

const Projects = () => {
  const [project1, setProject1] = useState<boolean>(false);
  const [project2, setProject2] = useState<boolean>(false);

  const popupProject1 = () => {
    setProject1((prev) => !prev);
  };
  const popupProject2 = () => {
    setProject2((prev) => !prev);
  };

  return (
    <div className={styles.maindiv}>
      <h1> 나의 프로젝트 </h1>
      <ul className={styles.projectList}>
        <li>
          <div className={styles.project_img_div}>
            <img
              src={"/images/project1/1.PNG"}
              alt={"project1"}
              className={styles.image}
            />
          </div>
          <div className={styles.projectText}>
            <h2> Do-Health 프로젝트 </h2>
            <p> 운동방법을 알려드립니다. </p>
            <p> AMR 과 감량에 필요한 칼로리 계산, </p>
            <p> 식단 달력을 사용할 수 있습니다.</p>
            <button onClick={popupProject1}>자세히 보기</button>
          </div>
          <Transition in={project1} timeout={300} unmountOnExit mountOnEnter>
            {(state) => <Project1 state={state} popupProject={popupProject1} />}
          </Transition>
        </li>
        <li>
          <div className={styles.project_img_div}>
            <img
              src={"/images/project2/1.JPG"}
              alt={"project1"}
              className={styles.image}
            />
          </div>
          <div className={styles.projectText}>
            <h2> 프로젝트 오늘 뭐먹지</h2>
            <p> 여러분들의 음식을 찜, 선택 해주고</p>
            <p> 먹은 칼로리를 계산해 드립니다.</p>
            <button onClick={popupProject2}>자세히 보기</button>
          </div>
          <Transition in={project2} timeout={300} unmountOnExit mountOnEnter>
            {(state) => <Project2 state={state} popupProject={popupProject2} />}
          </Transition>
        </li>
      </ul>
    </div>
  );
};
export default Projects;
