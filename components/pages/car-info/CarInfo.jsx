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

const CarInfo = (props) => {
  const benefitsArr = [
    {
      img: "/team.png",
      heading: "Your ad will reach thousands",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor leo eu, pellentesque sed imperdiet purus convallis euismod suspendisse.",
    },
    {
      img: "/money-bag.png",
      heading: "Your ad will reach thousands",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor leo eu, pellentesque sed imperdiet purus convallis euismod suspendisse.",
    },
    {
      img: "/thunderbolt.png",
      heading: "Your ad will reach thousands",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor leo eu, pellentesque sed imperdiet purus convallis euismod suspendisse.",
    },
  ];
  const chooseArr = [
    {
      img: "/team.png",
      heading: "Lorem ipsum dolor ",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor leo eu, pellentesque sed imperdiet purus convallis euismod suspendisse.",
    },
    {
      img: "/money-bag.png",
      heading: "Lorem ipsum dolor ",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor leo eu, pellentesque sed imperdiet purus convallis euismod suspendisse.",
    },
    {
      img: "/thunderbolt.png",
      heading: "Lorem ipsum dolor ",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor leo eu, pellentesque sed imperdiet purus convallis euismod suspendisse.",
    },
  ];

  return (
    <div className={styles.carInfo}>
      <div className={styles.back}></div>
      <div className={styles.basicInfoContainer}>
        <CarScrollNew images={props.data.images}></CarScrollNew>
        {/* <CarScroller images={props.data.images}></CarScroller> */}
        <div className={styles.info}>
          <div className={styles.basicInfo}>
            <h1>
              {props.data.firstRegistration.split("-")[0] + props.data.make}
            </h1>
            <p>{props.data.model}</p>
            <h3>€ 1.150</h3>
            <div className={styles.container}>
              <p>{props.data.mileage}</p>
              <p>{props.data.power}</p>
              <p>{props.data.fuel}</p>
            </div>
          </div>
          <div className={styles.sellerInfo}>
            <div className={styles.name}>
              <CgProfile />
              <p>John Doe</p>
            </div>
            <div className={styles.email}>
              <MdOutlineEmail />
              <p>Johndoe4543@gmail.com</p>
            </div>
            <div className={styles.location}>
              <HiOutlineLocationMarker />
              <p>250 miles away</p>
            </div>
          </div>
          <div>
            <Button width='100%' padding='20px 10px'>Contact Seller</Button>
          </div>
        </div>
      </div>
      {/* left and right sections for car info ads */}
      <div className={styles.infoSection}>
        {/* left section containing car info and details */}
        <div className={styles.leftSection}>
          <div className={styles.carDetails}>
            <h4>Car Overview</h4>
            <div className={styles.carDetailsContainer}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <h6>Manufacturing Year</h6>
                  <p>2016</p>
                </div>
                <div className={styles.col}>
                  <h6>Manufacturing Year</h6>
                  <p>2016</p>
                </div>
                <div className={styles.col}>
                  <h6>Manufacturing Year</h6>
                  <p>2016</p>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.col}>
                  <h6>Manufacturing Year</h6>
                  <p>2016</p>
                </div>
                <div className={styles.col}>
                  <h6>Manufacturing Year</h6>
                  <p>2016</p>
                </div>
                <div className={styles.col}>
                  <h6>Manufacturing Year</h6>
                  <p>2016</p>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.col}>
                  <h6>Manufacturing Year</h6>
                  <p>2016</p>
                </div>
                <div className={styles.col}>
                  <h6>Manufacturing Year</h6>
                  <p>2016</p>
                </div>
                <div className={styles.col}>
                  <h6>Manufacturing Year</h6>
                  <p>2016</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.benefits}>
            <h4>Benefits</h4>
            <div className={styles.benefitsContainer}>
              {benefitsArr.map((item) => (
                <div key={item.img} className={styles.box}>
                  <div
                    style={{ backgroundImage: `url(${item.img})` }}
                    className={styles.roundImage}
                  ></div>
                  <h6>{item.heading}</h6>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.sellCar}>
            <h4>Do you want to sell your car?</h4>
            <div className={styles.sellCarContainer}>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  tristique tortor commodo eget.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  tristique tortor commodo eget.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  tristique tortor commodo eget.
                </li>
                <Link href="/ads/create/step-1" passHref>
                  <Button padding='10px 20px' margin='10px 0px 0px 0px'>
                    Sell Car &nbsp;&nbsp;
                    <FiArrowRight />
                  </Button>
                </Link>
              </ul>

              <div className={styles.image}></div>
            </div>
          </div>
          <div className={styles.chooseUs}>
            <h4>Why choose us?</h4>
            <div className={styles.chooseUsContainer}>
              {chooseArr.map((item) => (
                <div key={item.img} className={styles.card}>
                  <div className={styles.img}></div>
                  <h6>{item.heading}</h6>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.ad}></div>
          <div className={styles.ad}></div>
        </div>
      </div>
      <Carousal cars={props.carsArray} title="Car details" />
    </div>
  );
};

export default CarInfo;
