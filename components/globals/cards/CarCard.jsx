import Image from "next/image";
import image from "../../../public/car.jpeg";
import styles from "./CarCard.module.scss";

const CarCard = (props) => {
  const { make, model, gearbox, power, mileage, images } = props.carData;

  return (
    <div className={styles.car_card}>
      <div className={styles.top}>
        <Image
          src={images[0]}
          alt="Car Image"
          // layout="fill"
          width={350}
          height={300}
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.name}>{make + " " + model}</div>
        <div className={styles.cost}>€ 1.150</div>
        <div className={styles.container}>
          <div className={styles.box}>
            <p className={styles.text}>Distance travelled</p>
            <p className={styles.boldText}>{mileage} km</p>
          </div>
          <div className={styles.box}>
            <p className={styles.text}>Engine capacity</p>
            <p className={styles.boldText}>{power} cc</p>
          </div>
          <div className={styles.box}>
            <p className={styles.text}>Engine type</p>
            <p className={styles.boldText}>{gearbox}</p>
          </div>
        </div>
      </div>
      <button>Contact seller</button>
    </div>
  );
};

export default CarCard;
