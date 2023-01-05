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
                      { text: "적절히 활용하는 정도" },
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
                      { text: "아는 것 중 제일 익숙함" },
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
                      { text: "활용도 5/10" },
                      { text: "하나하나 찾아보면서 하는 정도" },
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
                      { text: "활용도 6/10" },
                      { text: "DOCS 를 찾아보며, 만들어보았다" },
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
                      { text: "활용도 7/10" },
                      { text: "Slice 와 Action(Thunk) 사용" },
                      { text: "TypeScript 와 함께 사용해 봄" },
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
                      { text: "활용도 2/10" },
                      { text: "설치후, 필요한 모듈만 빼서 사용해봄" },
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
          <h3> 협업 툴 </h3>
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
                      { text: "활용도 4/10" },
                      { text: "기본적인 push와 pull 의 활용 " },
                      { text: "pull Request 와 merge 를 사용" },
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
                      { text: "CURD 의 사용" },
                      { text: "기타 조건문들의 사용" },
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
                      { text: "활용도 5/10" },
                      { text: "CURD 의 사용" },
                      { text: "FireBase-Auth 의 사용" },
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
                      { text: "활용도 1/10" },
                      { text: "그냥 한번 따라해봤다 정도..." },
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
