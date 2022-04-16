import { BookmarkIcon } from "@heroicons/react/solid";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <a href={props.url} target="_blank" className={styles.link}>
      <button className={styles.container}>
        {/* <i className={styles.iconContainer}>
        <BookmarkIcon className={styles.icon} />
      </i> */}
        {props.label}
      </button>
    </a>
  );
};

export default Button;
