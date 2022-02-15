import Link from "next/link";
import styles from "./Success.module.scss";
import Button from "../../globals/button/Button";
const Success = () => {
  return (
    <div className={styles.success}>
      <h3>Seller</h3>
      <p>Congratulation, Now you have become seller with company name</p>
      <Link href="/ad/create/step-1" passHref>
        <Button>Post an ad</Button>
      </Link>
      <Link href="/" passHref>
        Skip for now
      </Link>
    </div>
  );
};

export default Success;
