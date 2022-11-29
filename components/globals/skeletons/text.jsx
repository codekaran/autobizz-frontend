import styles from "./text.module.scss";

const TextSkeleton = (props) => {
  return (
    <div style={props.css} className={styles.textWrapper}>
      <div className={styles.shimmer}></div>
    </div>
  );
};

export default TextSkeleton;
