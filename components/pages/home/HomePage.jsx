import BrandsStrip from "../../globals/brands/BrandsStrip";
import Carousel from "../../layouts/carousel/Carousel";
import Filter from "./Filter";
import SellCar from "./SellCar";

const HomePage = () => {
  return (
    <div>
      <Filter />
      <Carousel title="Latest cars" />
      <SellCar />
      <Carousel title="Top search cars" />
      <BrandsStrip />
      <Carousel title="Cars by Top Brands" />
    </div>
  );
};

export default HomePage;
