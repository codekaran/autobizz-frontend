import React from "react";
import styles from "./Steps.module.scss";
import Button from "../../globals/button/Button";

import { useRouter } from "next/router";
import { useEffect } from "react";
import AdContext from "../../../context/ad-context";
import { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { route } from "next/dist/server/router";

const Step_2 = () => {
  // to fetch car makes and models

  useEffect(async () => {
    let result;
    if (ctx.data.make) {
      console.log("context is data ))))))))))))))");
      result = await axios.get(
        "http://192.168.1.8:8000/seller-api/ref/getModels/" + ctx.data.make
      );
      let ctx_obj = ctx.data;
      ctx_obj["model"] = result.data[0].model;
      console.log(ctx_obj);
      handleSession(ctx_obj);
      // setData({ ...data, ["model"]: result.data[0].model });
    } else {
      let session = window.sessionStorage.getItem("auto_bizz_steps");
      if (session) {
        console.log("got data from session");
        session = JSON.parse(session);
        console.log(session);
        result = await axios.get(
          "http://192.168.1.8:8000/seller-api/ref/getModels/" + session.make
        );
        session["model"] = result.data[0].model;
        // set data stored in session as state
        handleSession(session);
      } else {
        // if niether session nor context exists
        router.push("/ads/create/step-1");
        return;
      }
    }
    console.log(result.data);
    setModels(result.data);
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
  });
  // state to manage gearbox and fuel
  const [isClicked, setIsClicked] = useState({ gearbox: "", fuel: "" });
  // ############ initialize ###########
  let ctx = useContext(AdContext);
  const router = useRouter();

  // ############ functions ###########

  // function to save data when back and refreshed
  const handleSession = (obj) => {
    setData({
      model: obj.model || "",
      firstRegistration: obj.firstRegistration || "",
      power: obj.power || 0,
      mileage: obj.mileage || 0,
      fuel: obj.fuel || "",
      gearbox: obj.gearbox || "",
    });
    setIsClicked({
      fuel: obj.fuel || "",
      gearbox: obj.gearbox || "",
    });
  };

  const handleChange = (name) => (e) => {
    console.log("handeling changes");
    console.log(name);
    let val = e.target.value;
    if (name === "fuel" || name === "gearbox") {
      val = e.target.innerText;
      setIsClicked({ ...isClicked, [name]: val });
      console.log(isClicked);
    }
    setData({ ...data, [name]: val });
  };

  const handleSubmit = () => {
    // if(isFormValid)
    ctx.setAdForm(data);
    window.sessionStorage.setItem("auto_bizz_steps", JSON.stringify(ctx.data));
    console.log(window.sessionStorage.getItem("auto_bizz_steps"));
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
      <Button onClick={handleSubmit}>Next</Button>
    </div>
  );
};

export default Step_2;
