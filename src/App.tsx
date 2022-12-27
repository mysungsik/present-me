import Greeting from "./whole-sections/section0-greeting/greeting";
import Introduce from "./whole-sections/section1-introduction/introduce";
import MyBackgorund from "./whole-sections/section2-mybackground/my-background";
import MySkill from "./whole-sections/section3-myskill/my-skill";
import Studies from "./whole-sections/section4-study/study";
import Projects from "./whole-sections/section5-project/projects";
import { Transition } from "react-transition-group";
import { useState } from "react";

function App() {
  const [show, setShow] = useState<boolean>(false);

  const showOthers = () => {
    setShow(true);
  };
  return (
    <div>
      <Transition in={!show} timeout={300}>
        {(state) => (
          <div>
            <Greeting showOthers={showOthers} state={state} />
          </div>
        )}
      </Transition>
      {show && (
        <div className={`main-content-text`}>
          <div>
            <Introduce />
          </div>
          <div>
            <MyBackgorund />
          </div>
          <div>
            <MySkill />
          </div>
          <div>
            <Studies />
          </div>
          <div>
            <Projects />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
