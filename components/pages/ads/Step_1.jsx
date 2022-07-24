import React from "react";
import styles from "./Steps.module.scss";
import Button from "../../globals/button/Button";
import Link from "next/link";
import AdContext from "../../../context/ad-context";
import { useContext } from "react";
import BMW from "../../../public/BMW.png";
import Volkswagen from "../../../public/Volkswagen.png";
import Volvo from "../../../public/Volvo.png";
import Audi from "../../../public/Audi.png";
import Mercedes from "../../../public/Mercedes.png";
import Kia from "../../../public/Kia.png";
import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react/cjs/react.development";

const Step_1 = (props) => {
  const ctx = useContext(AdContext);
  useEffect(() => {
    ctx.setAdForm({ make: props.makes[0]["make"] });
  }, []);

  const [make, setMake] = useState(props.makes[0]);
  const [isClicked, setIsClicked] = useState("");

  const handleChange = (value) => (event) => {
    console.log("handling chnage");

    console.log(event.target.value);
    setMake(event.target.value);
    ctx.setAdForm({ make: event.target.value });
  };

  const handleClick = (value) => (event) => {
    console.log(value);
    setIsClicked(value);
    if (value === "Mercedes") {
      value = "Mercedes-Benz";
    }
    ctx.setAdForm({ make: value.toUpperCase() });

    setMake(value.toUpperCase());
  };

  const carImageArr = [
    { name: "BMW", img: BMW },
    { name: "Audi", img: Audi },
    { name: "Mercedes", img: Mercedes },
    { name: "Volvo", img: Volvo },
    { name: "VW", img: Volkswagen },
    { name: "Kia", img: Kia },
  ];

  console.log(props);
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
      <Link href="/ad/create/step-2" passHref>
        <Button>Next</Button>
      </Link>
    </div>
  );
};

export default Step_1;
