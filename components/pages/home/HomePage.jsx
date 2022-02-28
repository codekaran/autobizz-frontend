import Carousel from "../../layouts/carousel/Carousel";
import GoogleAd from "./GoogleAd";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.home}>
        <Carousel title="Car details" />
        <TestimonialSection />
        <Carousel title="Car details" />
        <GoogleAd />
        <Carousel title="Car details" />
      </div>
    </>
  );
};

export default HomePage;
