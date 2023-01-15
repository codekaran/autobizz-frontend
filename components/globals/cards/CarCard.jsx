import Image from "next/image";
import image from "../../../public/car.jpeg";
import styles from "./CarCard.module.scss";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";
import Button from '../button/Button'

const CarCard = (props) => {
  const router = useRouter();
  const { make, model, gearbox, power, mileage, images, id, condition, fuel } = props.carData;
  const [loaded, setLoaded] = useState(false);
  const handleRedirect = () => {
    router.push("/car/" + make + "-" + model + "-" + id);
    // console.log();
  };
  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div onClick={handleRedirect} className={styles.car_card}>
      <div className={styles.top}>
        <Image
          src={images[0]}
          alt={make + " " + model}
          width="350px"
          height="250px"
          onLoadingComplete={handleImageLoad}
        />
        {!loaded && (
          <div className={styles.loader}>
            <div className={styles.shimmer}></div>
          </div>
        )}
      </div>
      <div className={styles.bottom}>
        <div className={styles.name}>{make + " " + model}</div>
        <div className={styles.gearbox}>{gearbox}</div>
        <div className={styles.tags}>
          <div className={styles.tag}>{mileage+" Km"}</div>
          <div className={styles.tag}>{condition}</div>
          <div className={styles.tag}>{fuel}</div>
          <div className={styles.tag}>{power+" CC"}</div>
        </div>
        <hr />
        <div className={styles.action}>
          <div className={styles.price}>€1440</div>
          <Button>Contact seller</Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
