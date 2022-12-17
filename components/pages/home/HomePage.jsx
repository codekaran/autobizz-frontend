import Carousel from "../../layouts/carousel/Carousel";
import GoogleAd from "./GoogleAd";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import styles from "./HomePage.module.scss";

const HomePage = (props) => {
  console.log(props.carsArray);
  return (
    <>
      <HeroSection text="Car Selling Solution" />
      <div className={styles.home}>
        <Carousel cars={props.carsArray} title="Featured cars" />
        <TestimonialSection />
        <Carousel cars={props.carsArray} title="Featured cars" />
        <GoogleAd />
        <Carousel cars={props.carsArray} title="Featured cars" />
        <Carousel cars={props.carsArray} title="Featured cars" />
      </div>
    </>
  );
};

export default HomePage;
