import Image from "next/image";
import car from "../../../public/car.jpeg";
import styles from "./CarCard.module.scss";

const CarCard = (props) => {
  return (
    <div className={styles.car_card}>
      <div className={styles.image}>
        <Image src={car} alt="car_image" layout="fill" />
      </div>
      <div className={styles.info}>
        <h1>2015 PEUGEOT 108 1.2I</h1>
        <p>Volkswagen Golf VI 1.2 Cabrio...</p>
        <h3>€ 1.150</h3>
        <div className={styles.container}>
          <p>20689 km</p>
          <p>2488 cc</p>
          <p>Diesel</p>
        </div>
      </div>
      <button>Contact Seller</button>
    </div>
  );
};

export default CarCard;
