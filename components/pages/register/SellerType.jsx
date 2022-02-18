import styles from "./SellerType.module.scss";
import Image from "next/image";
import priv from "../../../public/private.png";

const SellerType = () => {
  return (
    <div className={styles.sellerType}>
      <h3>Seller</h3>
      <h1>Register</h1>
      <p>Provide some personal info for smooth and easy journey</p>
      <p className={styles.boldText}>What type of seller is it?</p>
      <div className={styles.container}>
        <div className={styles.box}>
          <Image src={priv} alt="owner" />
          Owner
        </div>
        <div className={styles.box}>
          <Image src={priv} alt="owner" />
          Dealer
        </div>
      </div>
      <button>Next</button>
    </div>
  );
};

export default SellerType;
