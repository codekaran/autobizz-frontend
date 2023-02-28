import React from "react";
import styles from "./Steps.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";
import AdContext from "../../../context/Ad/AdContext";
import AuthContext from '../../../context/Auth/AuthContext';
import { useContext } from "react";
import BMW from "../../../public/BMW.png";
import Volkswagen from "../../../public/Volkswagen.png";
import Volvo from "../../../public/Volvo.png";
import Audi from "../../../public/Audi.png";
import Mercedes from "../../../public/Mercedes.png";
import Kia from "../../../public/Kia.png";
import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";

const Step_1 = (props) => {
  // checking if the sesssion contains data
  // if it contains updating the state and context
  const {isAuthenticated} = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if(!isAuthenticated) router.push('/login/seller');
    AdCtx.setAdForm({ make: props.makes[0]["make"],step1Completed:true });
  }, []);

  // ############ component state ###########
  const [make, setMake] = useState(props.makes[0]["make"]);
  const [isClicked, setIsClicked] = useState("");

  // ############ initialize ###########
  const AdCtx = useContext(AdContext);
  
  const carImageArr = [
    { name: "BMW", img: BMW },
    { name: "Audi", img: Audi },
    { name: "Mercedes", img: Mercedes },
    { name: "Volvo", img: Volvo },
    { name: "VW", img: Volkswagen },
    { name: "Kia", img: Kia },
  ];

  // ############ functions ###########
  const handleChange = (value) => (event) => {
    setMake(event.target.value);
  };

  const handleClick = (value) => (event) => {
    setIsClicked(value);
    if (value === "Mercedes") {
      value = "Mercedes-Benz";
    }
    setMake(value.toUpperCase());
  };

  const handleSubmit = (e) =>{
    AdCtx.setAdForm({
      make:make,
      step1Completed:true
    })
  }

  return (
    <div className={styles.step_1}>
      <p className={styles.boldText}>What is the Brand of your Vehicle?</p>
      <select value={make} onChange={handleChange("options")}>
        {props.makes.map((item) => (
          <option key={item.make} value={item.make}>
            {item.make}
          </option>
        ))}
      </select>
      <p className={styles.text}>Popular brands</p>
      <div className={styles.container}>
        {carImageArr.map((item) => (
          <div
            key={item.name}
            style={{
              backgroundColor: isClicked === item.name ? "#B1D0E0" : "",
            }}
            onClick={handleClick(item.name)}
            className={styles.box}
          >
            <Image src={item.img} alt="owner" />
            {item.name}
          </div>
        ))}
      </div>
      <Link href="/ads/create/step-2">
        <Button padding='10px 30px' icon={<FaArrowRight/>} onClick={handleSubmit}>Next</Button>
      </Link>
    </div>
  );
};

export default Step_1;
