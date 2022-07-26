import Carousel from "../../layouts/carousel/Carousel";
import GoogleAd from "./GoogleAd";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import styles from "./HomePage.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [carsArray, setCarsArray] = useState([]);
  useEffect(async () => {
    // 192.168.1.7
    let result = await axios.get("http://3.83.43.208:8000/seller-api/ads/ads", {
      auth: {
        username: "karan",
        password: 123,
      },
    });
    console.log(result.data);
    setCarsArray(result.data);
  }, []);

  // const carData =
  return (
    <>
      <HeroSection />
      <div className={styles.home}>
        <Carousel cars={carsArray} title="Car details" />
        <TestimonialSection />
        <Carousel cars={carsArray} title="Car details" />
        <GoogleAd />
        <Carousel cars={carsArray} title="Car details" />
        <Carousel cars={carsArray} title="Car details" />
      </div>
    </>
  );
};

export default HomePage;
