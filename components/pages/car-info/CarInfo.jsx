import styles from "./CarInfo.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";
import Carousel from "../../layouts/carousel/Carousel";
import car2 from "../../../public/car2.jpeg";
import Button from "../../globals/button/Button";

const CarInfo = () => {
  return (
    <div className={styles.CarInfo}>
      {/* Return Link */}
      <div className={styles.return}>
        <AiOutlineArrowLeft />
        <p>Car Details</p>
      </div>

      {/* Car Image and basic info */}
      <div className={styles.gridContainer}>
        {/* Car Image Carousel*/}
        <div className={styles.imageSection}>
          <Image src={car2} alt="Car Details" layout="fill" />
        </div>
        {/* Car Basic Info */}
        <div className={styles.basicInfo}>
          <h1>2015 PEUGEOT 108 1.2I</h1>
          <p>Volkswagen Golf VI 1.2 Cabrio...</p>
          <h3>€ 1.150</h3>
          <div className={styles.container}>
            <p>20689 km</p>
            <p>2488 cc</p>
            <p>Diesel</p>
          </div>
        </div>
        {/* Car Seller Info */}
        <div className={styles.sellerInfo}>
          <div className={styles.container}>
            <div className={styles.profile}></div>
            <p>John Doe</p>
          </div>
          <div className={styles.container}>
            <MdOutlineEmail />
            <p>Johndoe4543@gmail.com</p>
          </div>
          <div className={styles.container}>
            <HiOutlineLocationMarker />
            <p>250 miles away</p>
          </div>
        </div>
        {/* Contact button */}
        <div className={styles.btn}>
          <Button>Contact Seller</Button>
        </div>
      </div>

      {/* Other Details and Google Ads */}
      <div className={styles.gridContainer2}>
        {/* Car Details */}
        <div className={styles.carDetails}>
          <h4>Car Details</h4>
          <table>
            <tr>
              <td>
                <h6>Manufacturing year</h6>
                <p>2012</p>
              </td>
              <td>
                <h6>Manufacturing year</h6>
                <p>2012</p>
              </td>
              <td>
                <h6>Manufacturing year</h6>
                <p>2012</p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Manufacturing year</h6>
                <p>2012</p>
              </td>
              <td>
                <h6>Manufacturing year</h6>
                <p>2012</p>
              </td>
              <td>
                <h6>Manufacturing year</h6>
                <p>2012</p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Manufacturing year</h6>
                <p>2012</p>
              </td>
              <td>
                <h6>Manufacturing year</h6>
                <p>2012</p>
              </td>
              <td>
                <h6>Manufacturing year</h6>
                <p>2012</p>
              </td>
            </tr>
          </table>
        </div>
        {/* Benefits */}
        <div className={styles.benefits}>
          <h4>Benefits</h4>
          <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.roundImage}></div>
              <h6>Your ad will reach thousands</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                leo eu, pellentesque sed imperdiet purus convallis euismod
                suspendisse.
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.roundImage}></div>
              <h6>Your ad will reach thousands</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                leo eu, pellentesque sed imperdiet purus convallis euismod
                suspendisse.
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.roundImage}></div>
              <h6>Your ad will reach thousands</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                leo eu, pellentesque sed imperdiet purus convallis euismod
                suspendisse.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sellCar}>3</div>
        <div className={styles.financing}>4</div>
        <div className={styles.googleAd1}>5</div>
        <div className={styles.googleAd2}>6</div>
      </div>

      {/* Carousel for recommended cars */}
      <Carousel title="Recommended posts" />
    </div>
  );
};

export default CarInfo;
