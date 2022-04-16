import styles from "./Link.module.css";
import { NavLink } from "react-router-dom";

const Link = (props) => {
  const inlineStyle = {
    boldPurple: {
      // color: props.type === "inline" ? "#6666ff" : "#212121",
      // fontWeight: props.weight === "bold" ? 800 : 500,
      // opacity: props.opacity,
    },
  };
  return (
    // <a href="#" className={styles.link} style={inlineStyle.boldPurple}>
    //   {props.label}
    // </a>
    <NavLink
      to={props.url}
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
      // style={inlineStyle.boldPurple}
    >
      {props.label}
    </NavLink>
  );
};

export default Link;
