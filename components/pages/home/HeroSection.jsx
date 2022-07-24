import React from "react";
import styles from "./HomePage.module.scss";
import image from "../../../public/Hero.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.text}>Car Selling Solution</div>
      <Image
        layout="responsive"
        // objectFit="cover"
        placeholder="blur"
        alt="sellCars"
        src={image}
        height={1000}
      ></Image>
    </div>
  );
};

export default HeroSection;
