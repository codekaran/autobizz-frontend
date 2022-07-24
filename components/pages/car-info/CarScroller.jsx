import styles from "./CarInfo.module.scss";
import imagePaths from "./imageImport";

const CarScroller = () => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageSection}>
        <div className={styles.imageScroller}>
          {imagePaths.map((image) => (
            <div
              key={image.src}
              style={{ backgroundImage: `url(${image.src})` }}
              className={styles.image}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.thumbnails}>
        {imagePaths.map((image) => (
          <div
            key={image.src}
            style={{ backgroundImage: `url(${image.src})` }}
            className={styles.image}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarScroller;
