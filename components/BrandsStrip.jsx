import styles from "./BrandsStrip.module.scss";

const BrandsStrip = () => {
  return (
    <div className={styles.container}>
      <h3>Popular Brands</h3>
      <div className={styles.strip}>
        <div className={styles.brand}>
          <div className={styles.brand_logo}></div>
          <p>BMW</p>
        </div>
        <div className={styles.brand}>
          <div className={styles.brand_logo}></div>
          <p>BMW</p>
        </div>
        <div className={styles.brand}>
          <div className={styles.brand_logo}></div>
          <p>BMW</p>
        </div>
        <div className={styles.brand}>
          <div className={styles.brand_logo}></div>
          <p>BMW</p>
        </div>
        <div className={styles.brand}>
          <div className={styles.brand_logo}></div>
          <p>BMW</p>
        </div>
        <div className={styles.brand}>
          <div className={styles.brand_logo}></div>
          <p>BMW</p>
        </div>
        <div className={styles.brand}>
          <div className={styles.brand_logo}></div>
          <p>BMW</p>
        </div>
      </div>
    </div>
  );
};

export default BrandsStrip;
