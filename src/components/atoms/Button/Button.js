import { BookmarkIcon } from "@heroicons/react/solid";
import styles from "./Button.module.css";

const Button = (props) => {
  const style = props.style;
  return (
    <a href={props.url} target="_blank" className={styles.link}>
      <button
        className={styles.container}
        onClick={props.OnPress}
        style={{
          backgroundColor: style.backgroundColor,
          color: style.textColor,
        }}
      >
        {style.text}
      </button>
    </a>
  );
};

export default Button;
