import styles from "./Button.module.scss";
const index = (props) => {
  return (
    <button style={props.css} className={styles.btn} onClick={props.onClick}>
      <p>{props.children}</p>
    </button>
  );
};

export default index;
