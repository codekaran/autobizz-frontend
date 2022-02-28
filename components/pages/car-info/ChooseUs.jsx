import styles from "./CarInfo.module.scss";

const ChooseUs = () => {
  return (
    <div className={styles.chooseUs}>
      <h4>Why choose us?</h4>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.image}></div>
          <h6 className={styles.title}>Lorem ipsum dolor</h6>
          <p className={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor leo
            eu, pellentesque sed imperdiet purus convallis euismod suspendisse.
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.image}></div>
          <h6 className={styles.title}>Lorem ipsum dolor</h6>
          <p className={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor leo
            eu, pellentesque sed imperdiet purus convallis euismod suspendisse.
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.image}></div>
          <h6 className={styles.title}>Lorem ipsum dolor</h6>
          <p className={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor leo
            eu, pellentesque sed imperdiet purus convallis euismod suspendisse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
