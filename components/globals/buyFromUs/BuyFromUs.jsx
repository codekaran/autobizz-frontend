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
    <BuyFromUsCard image={thunderbolt} heading={"Lightning fast deals"} text={'Laboris consequat exercitation ullamco officia sunt officia ullamctate incididunt.'}/>
    <BuyFromUsCard image={moneybag} heading={"Best price promised"} text={'Laboris consequat exercitation ullamco officia sunt officia ullamco mi incididunt.'}/>
    <BuyFromUsCard image={team} heading={"Millions of customers ready to buy"} text={'Laboris consequat exercitation ullamco officia sunt officiai voluptate incididunt.'}/>
    <BuyFromUsCard image={thunderbolt} heading={"Best price promised"} text={'Laboris consequat exercitation ullamco officia sunt officia ullamcoate incididunt.'}/>
  </div>
  </div>
    )
};

export default BuyFromUs;
