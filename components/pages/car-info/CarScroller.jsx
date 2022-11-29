import styles from "./CarScroller.module.scss";
// import imagePaths from "./imageImport";
import Image from "next/image";

const CarScroller = (props) => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageSection}>
        <div className={styles.imageScroller}>
          {props.images.map((image) => (
            <div
              key={image.src}
              // style={{ backgroundImage: `url(${image.src})` }}
              className={styles.image}
            >
              <Image
                src={image}
                layout="fill"
                objectFit="contain"
                priority
              ></Image>
            </div>
          ))}
        </div>
      </div>
      {/* <div className={styles.thumbnails}>
        {imagePaths.map((image) => (
          <div
            key={image.src}
            style={{ backgroundImage: `url(${image.src})` }}
            className={styles.image}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default CarScroller;
