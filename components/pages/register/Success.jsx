import Link from "next/link";
import Image from "next/image";
import styles from "./Success.module.scss";
import Button from "../../globals/button/Button";
import Done from "../../../public/done.png";

const Success = () => {
  
  return (
    <div className={styles.success}>
      <h3>Seller</h3>
      <p>Congratulation, Now you have become a seller with us.</p>
      <div className={styles.image}>
        <Image src={Done} alt="Registration_success" />
      </div>
      <Link href="/ads/create/step-1" passHref>
        <Button>Post an ad</Button>
      </Link>
      <Link href="/" passHref>
        Skip for now
      </Link>
    </div>
  );
};

export default Success;
