import React from "react";
import styles from "./Steps.module.scss";
import Button from "../../globals/button/Button";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AdContext from "../../../context/Ad/AdContext";
import { useContext } from "react";
import axios from "/axios/index.js";
import { useState } from "react";
import { route } from "next/dist/server/router";
 
const Step_2 = () => {
  // to fetch carmodels

  useEffect(async () => {
    if(!ctx.adFormData.step1Completed){}
    else{
      let result;
      if (ctx.adFormData.make) {
      result = await axios.get(
        `/seller-api/ref/getModels/` + ctx.adFormData.make
      );
      const ctx_obj = ctx.adFormData;
      ctx_obj["model"] = result.data[0].model;
    }
    setModels(result.data);
    }
  }, []);

  // ############ component state ###########
  const [models, setModels] = useState([]);
  const [data, setData] = useState({
    model: "",
    firstRegistration: "",
    power: 0,
    mileage: 0,
    fuel: "",
    gearbox: "",
    step2Completed:true,
  });
  // state to manage gearbox and fuel
  const [isClicked, setIsClicked] = useState({ gearbox: "", fuel: "" });
  // ############ initialize ###########
  let ctx = useContext(AdContext);
  const router = useRouter();

  // ############ functions ###########

  const handleChange = (name) => (e) => {
    const val = e.target.value;
    if (name === "fuel" || name === "gearbox") {
      val = e.target.innerText;
      setIsClicked({ ...isClicked, [name]: val });
    }
    setData({ ...data, [name]: val });
  };

  const handleSubmit = () => {
    // if(isFormValid)
    ctx.setAdForm(data);
    router.push("/ads/create/step-3");
  };

  const { model, firstRegistration, power, mileage, fuel, gearbox } = data;

  return (
    <div className={styles.step_2}>
      <p className={styles.boldText}>Vehicle Information</p>
      <div className={styles.inputBox}>
        <p className={styles.text}>Select your model</p>
        <select name="" id="" onChange={handleChange("model")}>
          {models.map((item) => (
            <option key={item.model} value={item.model}>
              {item.model}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.container}>
        <div className={styles.inputBox}>
          <p className={styles.text}>Date of Registration</p>
          <input
            value={firstRegistration}
            onChange={handleChange("firstRegistration")}
            type="date"
            className={styles.date}
          />
        </div>
        <div className={styles.inputBox}>
          <p className={styles.text}>Horse Power</p>
          <input
            value={power}
            onChange={handleChange("power")}
            type="number"
            className={styles.number}
            placeholder="000"
          />
        </div>
        <div className={styles.inputBox}>
          <p className={styles.text}>Distance driven</p>
          <input
            value={mileage}
            onChange={handleChange("mileage")}
            type="number"
            className={styles.number}
            placeholder="00000"
          />
        </div>
      </div>
      <div className={styles.inputBox}>
        <p className={styles.text}>Fuel Type</p>
        <div className={styles.container}>
          <div
            onClick={handleChange("fuel")}
            className={
              isClicked.fuel === "Petrol"
                ? styles.selectBtn + " " + styles.isClicked
                : styles.selectBtn
            }
          >
            Petrol
          </div>
          <div
            onClick={handleChange("fuel")}
            className={
              isClicked.fuel === "Diesel"
                ? styles.selectBtn + " " + styles.isClicked
                : styles.selectBtn
            }
          >
            Diesel
          </div>
          <div
            onClick={handleChange("fuel")}
            className={
              isClicked.fuel === "CNG"
                ? styles.selectBtn + " " + styles.isClicked
                : styles.selectBtn
            }
          >
            CNG
          </div>
        </div>
      </div>
      <div className={styles.inputBox}>
        <p className={styles.text}>Gear Transmission</p>
        <div className={styles.container}>
          <div
            onClick={handleChange("gearbox")}
            className={
              isClicked.gearbox === "Manual"
                ? styles.selectBtn + " " + styles.isClicked
                : styles.selectBtn
            }
          >
            Manual
          </div>
          <div
            onClick={handleChange("gearbox")}
            className={
              isClicked.gearbox === "Automatic"
                ? styles.selectBtn + " " + styles.isClicked
                : styles.selectBtn
            }
          >
            Automatic
          </div>
        </div>
      </div>
      <Button padding='10px 30px' onClick={handleSubmit} icon={<FaArrowRight/>}>Next</Button>
    </div>
  );
};

export default Step_2;
