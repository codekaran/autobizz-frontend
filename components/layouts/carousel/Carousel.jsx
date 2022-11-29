import styles from "./Carousel.module.scss";
import "react-multi-carousel/lib/styles.css";
import CarCard from "../../globals/cards/CarCard";
import leftArrow from "../../../public/leftArrow.png";
import rightArrow from "../../../public/rightArrow.png";
import { useState, useRef } from "react";
import handleScroll from "./SmoothScroll";

const Carousal = (props) => {
  console.log(props);

  let carousel = useRef(null);

  return (
    <>
      <div className={styles.heading}>
        <h4 className={styles.title}>{props.title}</h4>
        <div className={styles.arrow}>
          <div
            onClick={handleScroll({ scrollDirection: -1, element: carousel })}
            className={styles.leftArrow}
          ></div>
          <div
            onClick={handleScroll({ scrollDirection: 1, element: carousel })}
            className={styles.rightArrow}
          ></div>
        </div>
      </div>
      <div className={styles.carousel}>
        {/* <h4 className={styles.title}>{props.title}</h4> */}

        <div id="my-scrollbar" ref={carousel} className={styles.cards}>
          {/* <SmoothScroll></SmoothScroll> */}
          {props.cars.map((car) => (
            <CarCard key={car.id} carData={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousal;
