import styles from "./Subheadline.module.css";

const Subheadline = (props) => {
  return <h1 className={styles.subheadline}>{props.label}</h1>;
};

export default Subheadline;
