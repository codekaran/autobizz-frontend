import Image from "next/image";
import image from "../../../public/car.jpeg";
import styles from "./CarCard.module.scss";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";
import Button from '../button/Button'

const CarCard = (props) => {
  const router = useRouter();
  const { make, model, gearbox, power, mileage, images, id } = props.carData;
  const [loaded, setLoaded] = useState(false);
  const handleRedirect = () => {
    router.push("/car/" + make + "-" + model + "-" + id);
    // console.log();
  };
  const handleImageLoad = () => {
    console.log("sdkjfhsdkjfhasdkjfah ");
    setLoaded(true);
  };

  return (
    <div onClick={handleRedirect} className={styles.car_card}>
      <div className={styles.top}>
        <Image
          src={images[0]}
          alt={make + " " + model}
          // layout="fill"
          width={350}
          height={300}
          objectFit="cover"
          // priority
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
        <div className={styles.cost}>€ 1.150</div>
        <div className={styles.container}>
          <div className={styles.box}>
            <p className={styles.text}>Distance travelled</p>
            <p className={styles.boldText}>{mileage} km</p>
          </div>
          <div className={styles.box}>
            <p className={styles.text}>Engine capacity</p>
            <p className={styles.boldText}>{power} cc</p>
          </div>
          <div className={styles.box}>
            <p className={styles.text}>Engine type</p>
            <p className={styles.boldText}>{gearbox}</p>
          </div>
        </div>
      </div>
      <Button width='100%'>Contact seller</Button>
    </div>
  );
};

export default CarCard;
