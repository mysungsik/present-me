import Introduce from "./whole-sections/section1-introduction/introduce";
import MyBackgorund from "./whole-sections/section2-mybackground/my-background";
import MySkill from "./whole-sections/section3-myskill/my-skill";
import Studies from "./whole-sections/section4-study/study";
import Projects from "./whole-sections/section5-project/projects";

function App() {
  return (
    <div>
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
  );
}

export default App;
