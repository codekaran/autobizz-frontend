import React from "react";
import styles from "./HeroSection.module.scss";
import image from "../../../public/car_herosection.png";
import Image from "next/image";
import Button from '../../globals/button/Button';
import {FaSearch} from 'react-icons/fa';
import {MdSell} from 'react-icons/md';
import { useRouter } from "next/router";
const HeroSection = (props) => {
  const router = useRouter(); 
  return (
    <div className={styles.heroSection}>
      <h6>Sell and Buy Cars<br/><span>Hasslefree!</span></h6>
      <p>With our amazing out reach sell your car easily to millions of customers at best market prices, but that’s not it as buyers can get well checked and good condition cars at best prices.</p>
      <div className={styles.buttonGroup}>
        <Button padding='20px' icon={<MdSell/>} onClick={(e)=>{router.push('/ads/create/step-1')}}>Sell your car now</Button>
        <Button padding='20px' icon={<FaSearch/>}>Explore cars</Button>
      </div>
    </div>
  );
};

export default HeroSection;
