import SkillDescription from "./skill-description";
import { useState } from "react";
import { Transition } from "react-transition-group";

const SkillItem = (props: {
  image: string;
  alt: string;
  desc: { text: string }[];
}) => {
  const { image, alt, desc } = props;
  const [itemState, setItemState] = useState(false);

  const toggleItem = () => {
    setItemState((prev) => !prev);
  };

  return (
    <div onClick={toggleItem}>
      <img src={image} alt={alt} />
      <p>{alt}</p>
      <Transition
        in={itemState}
        timeout={{
          enter: 50,
          exit: 300,
        }}
      >
        {(state) => (
          <SkillDescription
            desc={desc}
            state={state}
            toggleState={toggleItem}
          />
        )}
      </Transition>
    </div>
  );
};

export default SkillItem;
