import styles from "./layout-header.module.css";

const LayoutHeader = () => {
  return (
    <div className={styles.main_header}>
      <div className={styles.logo}>
        <h1> Logo </h1>
      </div>
      <ul>
        <li>
          <button type="button" className="btn btn-outline-primary">
            <a href="mailto:audtlr93@naver.com">Contact Me</a>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default LayoutHeader;
