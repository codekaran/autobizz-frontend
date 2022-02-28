import styles from "./CarInfo.module.scss";

const Financing = () => {
  return (
    <div className={styles.finance}>
      <h4>Financing Option</h4>
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.lgText}>Car price</p>
          <p className={styles.lgBoldText}>€ 2,251</p>
        </div>
      </div>
    </div>
  );
};

export default Financing;
