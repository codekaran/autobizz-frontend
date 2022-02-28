import styles from "./Carousel.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarCard from "../../globals/cards/CarCard";

const responsive = {
  web: {
    breakpoint: { max: 4000, min: 500 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};

const Carousal = (props) => {
  return (
    <div className={styles.carousel}>
      <h4 className={styles.title}>{props.title}</h4>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
        >
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </Carousel>
    </div>
  );
};

export default Carousal;
