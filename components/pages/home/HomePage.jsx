import Carousel from "../../layouts/carousel/Carousel";
import GoogleAd from "./GoogleAd";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import styles from "./HomePage.module.scss";
import SearchBar from "../../globals/search/SearchBar";

const HomePage = (props) => {
  console.log(props.carsArray);
  return (
    <div className={styles.home}>
      <SearchBar/>
      <HeroSection text="Sell and Buy Cars Hasslefree!"/>
      <div className={styles.home}>
        <Carousel cars={props.carsArray} title="Featured cars" />
        <TestimonialSection />
        <GoogleAd />
      </div>
    </div>
  );
};

export default HomePage;
