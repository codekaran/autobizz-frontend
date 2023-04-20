import Carousel from "../../layouts/carousel/Carousel";
import GoogleAd from "./GoogleAd";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import styles from "./HomePage.module.scss";
import SearchBar from "../../globals/search/SearchBar";
import BuyFromUs from "../../globals/buyFromUs/BuyFromUs";
import Testimonials from "../../globals/testimonials/Testimonials";

const HomePage = (props) => {
  return (
    <div className={styles.home}>
      {/* <SearchBar/> */}
      <HeroSection text="Sell and Buy Cars Hasslefree!"/>
      <SearchBar/>
      <div className={styles.home_section}>
        <Carousel cars={props.carsArray} title="Featured cars" />
        <BuyFromUs/>
        <Testimonials/>
        <GoogleAd />
      </div>
    </div>
  );
};

export default HomePage;
