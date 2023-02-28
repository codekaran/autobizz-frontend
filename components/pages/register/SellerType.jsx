import styles from "./SellerType.module.scss";
import Image from "next/image";
import owner from "../../../public/owner.png";
import dealer from "../../../public/commercial.png";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState,useEffect } from "react";
import Button from '../../globals/button/Button';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import AuthContext from "../../../context/Auth/AuthContext";
const SellerType = ({setActive}) => {
  const router = useRouter();
  const {setRegisterForm,registerFormData} = useContext(AuthContext);
  const {page2Filled} = registerFormData;
  const handleSubmit = (event) => {
    event.preventDefault();
    setActive(3);
  };

  const [isClicked, setIsClicked] = useState("Owner");
  const handleOnClick = (type) => {
    setIsClicked(type);
  };
  useEffect(() => {
    // !page2Filled && router.push('/register')
    setRegisterForm({sellerType:isClicked});
  }, [isClicked])
  return (
    <div className={styles.sellerType}>
      <p>Provide some personal info for smooth and easy journey</p>
      <p className={styles.boldText}>What type of seller is it?</p>
      <div className={styles.container}>
        <div
          onClick={() => {
            handleOnClick("Owner");
          }}
          className={`${styles.box} ${isClicked==='Owner' && styles.isClicked}`}
        >
          <Image src={owner} alt="owner" />
          Owner
        </div>
        <div
          onClick={() => {
            handleOnClick("Dealer");
          }}
          className={`${styles.box} ${isClicked==='Dealer' && styles.isClicked}`}
        >
          <Image src={dealer} alt="dealer" />
          Dealer
        </div>
      </div>
        <div className={styles.buttonGroup}>
        <Button onClick={(e)=>{e.preventDefault();setActive(1)}} icon={<FaArrowAltCircleLeft/>}>Back</Button>
        <Button onClick={handleSubmit} icon={<FaArrowAltCircleRight/>}>Next</Button>
        </div>
      </div>
  );
};

export default SellerType;
