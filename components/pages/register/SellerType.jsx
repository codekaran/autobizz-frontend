import styles from "./SellerType.module.scss";
import Image from "next/image";
import owner from "../../../public/owner.png";
import dealer from "../../../public/commercial.png";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState,useEffect } from "react";
import Button from '../../globals/button/Button';
import { FaArrowRight } from "react-icons/fa";
import AuthContext from "../../../context/Auth/AuthContext";
const SellerType = () => {
  const router = useRouter();
  const {setRegisterForm,registerFormData} = useContext(AuthContext);
  const {page2Filled} = registerFormData;
  const handleSubmit = () => {
    router.push("/register/seller-info");
  };

  const [isClicked, setIsClicked] = useState("Owner");
  const handleOnClick = (type) => {
    setIsClicked(type);
  };
  useEffect(() => {
    !page2Filled && router.push('/register')
    setRegisterForm({sellerType:isClicked});
  }, [isClicked])
  return (
    <div className={styles.sellerType}>
      <h3>Seller</h3>
      <h1>Register</h1>
      <p>Provide some personal info for smooth and easy journey</p>
      <p className={styles.boldText}>What type of seller is it?</p>
      <div className={styles.container}>
        <div
          style={{ backgroundColor: isClicked === "Owner" ? "#B1D0E0" : "" }}
          onClick={() => {
            handleOnClick("Owner");
          }}
          className={styles.box}
        >
          <Image src={owner} alt="owner" />
          Owner
        </div>
        <div
          style={{ backgroundColor: isClicked === "Dealer" ? "#B1D0E0" : "" }}
          onClick={() => {
            handleOnClick("Dealer");
          }}
          className={styles.box}
        >
          <Image src={dealer} alt="dealer" />
          Dealer
        </div>
      </div>
      <Button onClick={handleSubmit} icon={<FaArrowRight/>}>Next</Button>
    </div>
  );
};

export default SellerType;
