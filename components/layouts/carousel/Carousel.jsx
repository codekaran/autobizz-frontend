import styles from "./Carousel.module.scss";
import CarCard from "../../globals/cards/CarCard";

const Carousel = ({ title }) => {
  return (
    <div className={styles.carousel}>
      <p>{title}</p>
      <div className={styles.container}>
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
};

export default Carousel;
