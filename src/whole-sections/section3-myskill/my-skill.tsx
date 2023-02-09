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
import firebase from "../../skills-svg/firebase.svg";
import sass from "../../skills-svg/sass.svg";
import SkillDescription from "./skill-description";
import { useState } from "react";
import { Transition } from "react-transition-group";

const MySkill = () => {
  const [javaState, setJavaState] = useState<boolean>(false);
  const [reactState, setReactState] = useState<boolean>(false);
  const [typeState, setTypeState] = useState<boolean>(false);
  const [nextState, setNextState] = useState<boolean>(false);
  const [reduxState, setReduxState] = useState<boolean>(false);
  const [bootState, setBootState] = useState<boolean>(false);
  const [gitHubState, setGitHubState] = useState<boolean>(false);
  const [mongoState, setMongoState] = useState<boolean>(false);
  const [fireState, setFireState] = useState<boolean>(false);
  const [nodeState, setNodeState] = useState<boolean>(false);
  const [sassState, setSassState] = useState<boolean>(false);

  const toggleJavaState = () => {
    setJavaState((prev) => !prev);
  };
  const toggleReactState = () => {
    setReactState((prev) => !prev);
  };
  const toggleTypeState = () => {
    setTypeState((prev) => !prev);
  };
  const toggleNextState = () => {
    setNextState((prev) => !prev);
  };
  const toggleReduxState = () => {
    setReduxState((prev) => !prev);
  };
  const toggleBootState = () => {
    setBootState((prev) => !prev);
  };

  const toggleGitHubState = () => {
    setGitHubState((prev) => !prev);
  };
  const toggleMongoState = () => {
    setMongoState((prev) => !prev);
  };
  const toggleFireState = () => {
    setFireState((prev) => !prev);
  };
  const toggleNodeState = () => {
    setNodeState((prev) => !prev);
  };
  const toggleSassState = () => {
    setSassState((prev) => !prev);
  };

  return (
    <div className={styles.maindiv}>
      <h1>보유한 능력들</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3> 프론트엔드 </h3>
          <hr />
          <div className={styles.card_svgs}>
            <div onClick={toggleJavaState}>
              {/* 자바스크립트 */}
              <img src={javascript} alt={"javascript"} />
              <p>JavaScript</p>
              <Transition
                in={javaState}
                timeout={{
                  enter: 50,
                  exit: 300,
                }}
              >
                {(state) => (
                  <SkillDescription
                    desc={[
                      { text: "활용도 8/10" },
                      { text: "완벽하진 않지만 활용에 익숙합니다." },
                    ]}
                    state={state}
                    toggleState={toggleJavaState}
                  />
                )}
              </Transition>
            </div>
            <div onClick={toggleReactState}>
              {/* 리액트 */}
              <img src={react} alt={"react"} />
              <p>리액트</p>
              <Transition
                in={reactState}
                timeout={{
                  enter: 50,
                  exit: 300,
                }}
              >
                {(state) => (
                  <SkillDescription
                    desc={[
                      { text: "활용도 10/10" },
                      { text: "함수형 컴포넌트 사용에 익숙합니다." },
                      { text: "기본적인 HOOK 부터 최적화에 필요한 " },
                      {
                        text: "useMemo, useCallback 훅 등을 적절히 사용합니다.",
                      },
                    ]}
                    state={state}
                    toggleState={toggleReactState}
                  />
                )}
              </Transition>
            </div>
            <div onClick={toggleTypeState}>
              {/* 타입스크립트 */}
              <img src={typescript} alt={"type"} />
              <p>TpyeScript</p>
              <Transition
                in={typeState}
                timeout={{
                  enter: 50,
                  exit: 300,
                }}
              >
                {(state) => (
                  <SkillDescription
                    desc={[
                      { text: "활용도 8/10" },
                      {
                        text: "Redux와 Nextjs, React에 전부 적용해보았습니다.",
                      },
                    ]}
                    state={state}
                    toggleState={toggleTypeState}
                  />
                )}
              </Transition>
            </div>
            <div onClick={toggleNextState}>
              {/* Nextjs */}
              <img src={nextjs} alt={"nextjs"} />
              <p>Next.js</p>
              <Transition
                in={nextState}
                timeout={{
                  enter: 50,
                  exit: 300,
                }}
              >
                {(state) => (
                  <SkillDescription
                    desc={[
                      { text: "활용도 8/10" },
                      { text: "SSR의 구동방식을 이해하고 작업했습니다." },
                      { text: "SSG의 방식을 이해하고 작업할 수 있습니다." },
                    ]}
                    state={state}
                    toggleState={toggleNextState}
                  />
                )}
              </Transition>
            </div>
            <div onClick={toggleReduxState}>
              {/* 리덕스 */}
              <img src={redux} alt={"redux"} />
              <p>리덕스</p>
              <Transition
                in={reduxState}
                timeout={{
                  enter: 50,
                  exit: 300,
                }}
              >
                {(state) => (
                  <SkillDescription
                    desc={[
                      { text: "활용도 8/10" },
                      { text: "Slice 와 Action(Thunk) 사용" },
                      { text: "TypeScript 와 함께 사용해 보았습니다" },
                    ]}
                    state={state}
                    toggleState={toggleReduxState}
                  />
                )}
              </Transition>
            </div>
            <div onClick={toggleBootState}>
              {/* 부트스트랩 */}
              <img src={bootstrap} alt={"bootstrap"} />
              <p>부트스트랩</p>
              <Transition
                in={bootState}
                timeout={{
                  enter: 50,
                  exit: 300,
                }}
              >
                {(state) => (
                  <SkillDescription
                    desc={[
                      { text: "활용도 4/10" },
                      { text: "설치후, 필요한 모듈만 빼서 사용해보았습니다" },
                    ]}
                    state={state}
                    toggleState={toggleBootState}
                  />
                )}
              </Transition>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <h3> 협업 및 기타</h3>
          <hr />
          <div className={styles.card_svgs}>
            <div>
              <img src={git} alt={"git"} />
              <p>Git</p>
            </div>
            <div onClick={toggleGitHubState}>
              {/* 깃허브 */}
              <img src={github} alt={"github"} />
              <p>깃허브</p>
              <Transition
                in={gitHubState}
                timeout={{
                  enter: 50,
                  exit: 300,
                }}
              >
                {(state) => (
                  <SkillDescription
                    desc={[
                      { text: "활용도 6/10" },
                      {
                        text: "기본적인 push와 pull, fork 등의 사용이 가능합니다",
                      },
                      { text: "pull Request 와 merge 를 사용가능합니다." },
                    ]}
                    state={state}
                    toggleState={toggleGitHubState}
                  />
                )}
              </Transition>
            </div>
            <div onClick={toggleSassState}>
              {/* SASS */}
              <img src={sass} alt={"sass"} />
              <p>SASS</p>
              <Transition
                in={sassState}
                timeout={{
                  enter: 50,
                  exit: 300,
                }}
              >
                {(state) => (
                  <SkillDescription
                    desc={[
                      { text: "활용도 7/10" },
                      {
                        text: "SCSS 문법을 사용합니다.",
                      },
                      {
                        text: "@use, @include, 중첩과 @if, @for 등의 조건문을 사용합니다.",
                      },
                      {
                        text: "& 를 사용한 결합과 CSS 결합자를 적절히 활용합니다. ",
                      },
                    ]}
                    state={state}
                    toggleState={toggleGitHubState}
                  />
                )}
              </Transition>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <h3> 백엔드 </h3>
          <hr />
          <div className={styles.card_svgs}>
            <div onClick={toggleMongoState}>
              {/* 몽고DB */}
              <img src={mongodb} alt={"mongodb"} />
              <p>MongoDB</p>
              <Transition
                in={mongoState}
                timeout={{
                  enter: 50,
                  exit: 300,
                }}
              >
                {(state) => (
                  <SkillDescription
                    desc={[
                      { text: "활용도 9/10" },
                      { text: "기본적인 CURD 의 사용이 가능합니다." },
                      {
                        text: " $regex , $or 드의 기타 조건문들을 사용합니다.",
                      },
                      { text: "현재 가장 잘 사용하는 DB" },
                    ]}
                    state={state}
                    toggleState={toggleMongoState}
                  />
                )}
              </Transition>
            </div>
            <div onClick={toggleFireState}>
              {/* 파이어베이스 */}
              <img src={firebase} alt={"firebase"} />
              <p>Firebase</p>
              <Transition
                in={fireState}
                timeout={{
                  enter: 50,
                  exit: 300,
                }}
              >
                {(state) => (
                  <SkillDescription
                    desc={[
                      { text: "활용도 6/10" },
                      { text: "기본적인 CURD 의 사용이 가능합니다" },
                      { text: "FireBase-Auth 를 사용해보았습니다" },
                    ]}
                    state={state}
                    toggleState={toggleFireState}
                  />
                )}
              </Transition>
            </div>
            <div onClick={toggleNodeState}>
              {/* 노드 */}
              <img src={nodejs} alt={"nodejs"} />
              <p>Nodejs</p>
              <Transition
                in={nodeState}
                timeout={{
                  enter: 50,
                  exit: 300,
                }}
              >
                {(state) => (
                  <SkillDescription
                    desc={[
                      { text: "활용도 4/10" },
                      { text: "자체적인 API 서버를 구축해보았습니다." },
                    ]}
                    state={state}
                    toggleState={toggleNodeState}
                  />
                )}
              </Transition>
            </div>
          </div>
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
