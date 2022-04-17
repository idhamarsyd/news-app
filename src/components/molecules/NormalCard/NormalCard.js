import styles from "./NormalCard.module.css";
import Subheadline from "./../../atoms/Subheadline/Subheadline";
import Button from "./../../atoms/Button/Button";
const NormalCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Subheadline label={props.title} />
        <a href={props.url} target="_blank" className={styles.link}>
          {props.source}
        </a>
        <p className={styles.body}>{props.description}</p>
      </div>
      <div className={styles.action}>
        <Button style={{ text: "View" }} url={props.url} />
        <Button style={props.saveButtonStyle} OnPress={props.OnPress} />
      </div>
    </div>
  );
};

export default NormalCard;
