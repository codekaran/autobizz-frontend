import team from "../../../public/team.png";
import thunderbolt from "../../../public/thunderbolt.png";
import moneybag from "../../../public/money-bag.png";
import Image from "next/image";
import styles from "./BuyFromUs.module.scss";
import BuyFromUsCard from "./BuyFromUsCard";

const BuyFromUs = () => {
  
  return (
  <div className={styles.container}>
  <h3>Why Buy From Us?</h3>
  <div className={styles.content}>
    <BuyFromUsCard image={thunderbolt} heading={"Lightning fast deals"} text={'Laboris consequat exercitatcascacascionac'}/>
    <BuyFromUsCard image={moneybag} heading={"Best price promised"} text={'Laboris consequat exercitatcascacascionac'}/>
    <BuyFromUsCard image={team} heading={"Multiple Customers"} text={'Laboris consequat exercitatcascacascionac.'}/>
    <BuyFromUsCard image={thunderbolt} heading={"Best price promised"} text={'Laboris consequat exercitatcascacascionac'}/>
  </div>
  </div>
    )
};

export default BuyFromUs;
