import styles from "./Headline.module.css";

const Headline = (props) => {
  return <h1 className={styles.headline}>{props.label}</h1>;
};

export default Headline;
