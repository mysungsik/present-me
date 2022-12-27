import styles from "./skill-description.module.css";

const SkillDescription: React.FC<{
  desc: string;
  desc2?: string;
  desc3?: string;
  desc4?: string;
  state: string;
  toggleState: () => void;
}> = (props) => {
  const { desc, desc2, desc3, desc4, state, toggleState } = props;
  return (
    <div
      className={`${styles.maindiv} ${styles[state]}`}
      onClick={() => toggleState}
    >
      <p> {desc}</p>
      <p>{desc2}</p>
      <p>{desc3}</p>
    </div>
  );
};

export default SkillDescription;
