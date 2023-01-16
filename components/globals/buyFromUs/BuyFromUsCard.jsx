import Image from "next/image";
import styles from "./BuyFromUsCard.module.scss";
import { useEffect, useState } from "react";

const BuyFromUsCard = (props) => {

  return (
  <div className={styles.card}>
    <div className={styles.header}>
    <div className={styles.imageContainer}><Image src={props.image}></Image></div>
    </div>
    <div className={styles.body}>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  </div>
    )
};

export default BuyFromUsCard;
