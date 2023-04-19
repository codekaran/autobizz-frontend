import React, { useEffect,useState } from "react";
import styles from "./HeroSection.module.scss";
import backgroundDesk from "../../../public/car_herosection.png";
import backgroundMobile from "../../../public/car_herosection_mobile.png";
import Image from "next/image";
import Button from '../../globals/button/Button';
import {FaSearch} from 'react-icons/fa';
import {MdSell} from 'react-icons/md';
import { useRouter } from "next/router";
import colors from '../../../variables/colors';

const HeroSection = (props) => {
  const router = useRouter(); 

  const hasWindow = typeof window !== 'undefined';

  function getBackGround() {
    const width = hasWindow ? window.innerWidth : null;
    return width>560? backgroundDesk : backgroundMobile;
  }

  const [background, setBackground] = useState(getBackGround());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setBackground(getBackGround());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return (
    <div className={styles.heroSection}>
      <div style={{zIndex:'-1'}}>
      <Image 
      src={background} 
      layout='fill' 
      objectFit="cover"/>
      </div>
      <h6>Sell and Buy Cars<br/><span>Hasslefree!</span></h6>
      {/* <p>With our amazing out reach sell your car easily to millions of customers at best market prices, but that’s not it as buyers can get well checked and good condition cars at best prices.</p> */}
      <div className={styles.buttonGroup}>
        <Button backgroundColor={colors.orangeAccent} icon={<MdSell/>} onClick={(e)=>{router.push('/ads/create/step-1')}}>Sell your car</Button>
        <Button  backgroundColor={colors.orangeAccent} icon={<FaSearch/>}>Explore cars</Button>
      </div>
    </div>
  );
};

export default HeroSection;
