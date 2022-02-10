import Image from "next/image";
import styles from "./SellCar.module.scss";
import sell_car_ad_image from "../../../public/sellCar.png";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const SellCar = () => {
  return (
    <div className={styles.sell_car_ad}>
      <div className={styles.container}>
        <h3>Do you want sell your car ?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A tristique
          tortor commodo eget. Magna nulla tristique tortor amet vitae lorem. At
          porta viverra mattis urna id odio aliquet vestibulum eu. Nisi purus,
          amet dignissim quisque morbi pulvinar. Mauris netus eget pellentesque
          malesuada nulla. Semper diam vel auctor magna enim.
        </p>
        <Link href="/ad" passHref>
          <button>
            Sell Car
            <FiArrowRight />
          </button>
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={sell_car_ad_image} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default SellCar;
