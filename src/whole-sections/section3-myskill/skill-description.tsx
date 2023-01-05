import styles from "./skill-description.module.css";

const SkillDescription: React.FC<{
  desc: { text: string }[];
  state: string;
  toggleState: () => void;
}> = (props) => {
  const { desc, state, toggleState } = props;
  return (
    <div
      className={`${styles.maindiv} ${styles[state]}`}
      onClick={() => toggleState}
    >
      {desc.map((item) => (
        <p>{item.text}</p>
      ))}
    </div>
  );
};

export default SkillDescription;
