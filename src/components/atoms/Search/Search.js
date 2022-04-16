import { SearchIcon } from "@heroicons/react/solid";
import styles from "./Search.module.css";

const Search = (props) => {
  return (
    <div className={styles.container}>
      <i className={styles.iconContainer}>
        <SearchIcon className={styles.icon} />
      </i>
      <input
        type="text"
        className={styles.field}
        placeholder="Search News"
        onChange={props.OnChange}
        onKeyDown={props.OnEnter}
      />
    </div>
  );
};

export default Search;
