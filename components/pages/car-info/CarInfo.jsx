import styles from "./CarInfo.module.scss";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
import CarScroller from "./CarScroller";
import Carousal from "../../layouts/carousel/Carousel";
import CarScrollNew from "./CarScrollNew";
import Button from '../../globals/button/Button';
import CarBasicInfo from "./CarBasicInfo";
import CarOverview from "./CarOverview/CarOverview";
import BuyFromUs from '../../globals/buyFromUs/BuyFromUs'
import CarScrollerBetaNew from "./CarScrollerBetaNew";
const CarInfo = (props) => {
  return (
    <div className={styles.carInfo}>
      {console.log(props.data)}
      
      <div className={styles.basicInfoContainer}>
        <CarScrollerBetaNew images={props.data.images}/>
        <CarBasicInfo data={props.data}/>
      </div>
      {/* left and right sections for car info ads */}
      <div className={styles.infoSection}>
        {/* left section containing car info and details */}
        <div className={styles.leftSection}>
          <CarOverview data={props.data}/>
        </div>
        
        <div className={styles.rightSection}>
          <div className={styles.ad}>Google Ads</div>
        </div>
      </div>
      <BuyFromUs/>
      <Carousal cars={props.carsArray} title="Featured Cars" />
    </div>
  );
};

export default CarInfo;
