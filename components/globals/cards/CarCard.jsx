import Image from "next/image";
import image from "../../../public/car.jpeg";
import styles from "./CarCard.module.scss";

const CarCard = (props) => {
  return (
    <div className={styles.car_card}>
      <div className={styles.top}>
        <div className={styles.image}>
          <Image src={image} alt="Car Image"/>
        </div>
        <p>152 km away</p>
        <h4>2015 PEUGEOT 108 1.2I</h4>
      </div>
      <div className={styles.bottom}>
        <h6>€ 1.150</h6>
        <div className={styles.container}>
          <div className={styles.box}>
            <p className={styles.text}>Distance travelled</p>
            <p className={styles.boldText}>206890 km</p>
          </div>
          <div className={styles.box}>
            <p className={styles.text}>Engine capacity</p>
            <p className={styles.boldText}>2515 cc</p>
          </div>
          <div className={styles.box}>
            <p className={styles.text}>Engine type</p>
            <p className={styles.boldText}>Manual</p>
          </div>
        </div>
      </div>
      <button>Contact seller</button>
    </div>
  );
};

export default CarCard;
