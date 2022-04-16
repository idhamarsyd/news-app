const { default: Link } = require("../atoms/Link/Link");

const NavBar = (props) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      overflow: "visible",
      gap: 24,
      //   border: "1px solid black",
    },
  };
  return (
    <div style={styles.container}>
      <Link
        color="primary"
        // label="Indonesia"
        weight="bold"
        label="Indonesia"
        url="/"
      />
      <Link label="Programming" opacity={0.6} url="/programming" />
      <Link label="COVID - 19" opacity={0.6} url="/covid" />
    </div>
  );
};

export default NavBar;
