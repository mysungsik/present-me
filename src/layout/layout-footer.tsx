import styles from "./layout-footer.module.css";
import github from "../skills-svg/github.svg";
import naver from "../skills-svg/naver.svg";

const LayoutFooter = () => {
  return (
    <div className={styles.main_footer}>
      <ul className={styles.ul}>
        <li>
          <a href="https://github.com/mysungsik">
            <img src={github} alt={"깃헙"} />
          </a>
        </li>
        <li>
          <a href="https://dive-into-frontend.tistory.com/">
            <img src={naver} alt={"네이버"} />
          </a>
        </li>
      </ul>
      <p> copy write</p>
    </div>
  );
};
export default LayoutFooter;
