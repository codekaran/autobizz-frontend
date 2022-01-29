import BrandsStrip from "./BrandsStrip";
import Carousel from "./Carousel";
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
