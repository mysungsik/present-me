import styles from "./layout-header.module.css";

const LayoutHeader = () => {
  return (
    <div className={styles.main_header}>
      <div className={styles.logo}>
        <img src={"/images/introduce/icons8-m-100.png"} />
      </div>
      <ul>
        <li>
          <button className={styles.button}>
            <a href="mailto:audtlr93@naver.com" className={styles.contact}>
              Contact Me
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default LayoutHeader;
