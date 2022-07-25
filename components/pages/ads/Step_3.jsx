import React from "react";
import styles from "./Steps.module.scss";
import Button from "../../globals/button/Button";
import axios from "axios";
import AdContext from "../../../context/ad-context";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

const Step_3 = () => {
  const [data, setData] = useState({
    condition: "",
    description: "",
    file: "",
  });

  const router = useRouter();
  const ctx = useContext(AdContext);

  const [isClicked, setIsClicked] = useState("");

  const handleChange = (name) => (e) => {
    console.log("handeling changes");
    // value of description field if sent
    let val = e.target.value;
    // handling condition of car
    if (name === "condition") {
      val = e.target.innerText;
      setIsClicked(val);
    }
    // handling image of car
    if (name === "file") {
      val = e.target.files;
    }
    setData({ ...data, [name]: val });
    console.log(data);
  };

  const createFormData = () => {
    console.log("creating form data");
    let finalData = { ...ctx.data, ...data };
    console.log(finalData);
    let fd = new FormData();
    for (let key in finalData) {
      if (key === "file") {
        for (let image of finalData[key]) {
          fd.append(key, image);
          let imageSize = image.size / 1000000;
          if (imageSize > 2) {
            alert(`Image ${image.name} greater than 2mb`);
          }
        }
      } else {
        fd.append(key, finalData[key]);
      }
    }
    return fd;
  };

  const handleSubmit = async () => {
    // if(isFormValid)

    let formData = createFormData();
    console.log(...formData);
    try {
      let result = await axios.post(
        "http://44.203.60.242:8000/seller-api/ads/1/ads",
        formData,
        {
          auth: {
            username: "karan",
            password: 123,
          },
        }
      );
      console.log(result);
      if (result.data == "Ad already exists") {
        alert(result.data);
      }
      if (result.data.includes("Ad Id:")) {
        alert("ad successfully uploaded");
      }
    } catch (err) {
      console.log(err);
    }
    // router.push("/");
  };
  return (
    <div className={styles.step_3}>
      <p className={styles.boldText}>Vehicle Information</p>
      <div className={styles.inputBox}>
        <p className={styles.text}>Condition of vehicle</p>
        <div className={styles.container}>
          <div
            onClick={handleChange("condition")}
            className={
              isClicked === "New"
                ? styles.selectBtn + " " + styles.isClicked
                : styles.selectBtn
            }
          >
            New
          </div>
          <div
            onClick={handleChange("condition")}
            className={
              isClicked === "Used"
                ? styles.selectBtn + " " + styles.isClicked
                : styles.selectBtn
            }
          >
            Used
          </div>
        </div>
      </div>
      <div className={styles.inputBox}>
        <p className={styles.text}>What should be the descrption of ad?</p>
        <textarea
          onChange={handleChange("description")}
          placeholder="Enter description here"
          rows="4"
        />
      </div>
      <div className={styles.inputBox}>
        <p className={styles.smBoldText}>Upload Picture</p>
        <p className={styles.text}>Picture should be less than 2MB each</p>
        <form encType="multipart/form-data">
          <input
            type="file"
            onChange={handleChange("file")}
            name="files"
            multiple
            accept="image/jpeg, image/png"
          ></input>
        </form>
        {/* <div className={styles.container}>
          <div className={styles.uploadImage}></div>
          <div className={styles.uploadImage}></div>
          <div className={styles.uploadImage}></div>
        </div> */}
      </div>
      {/* //TODO: Redirect to ad dashboard */}
      {/* <Link href="/" passHref> */}
      <Button onClick={handleSubmit}>Create Ad</Button>
      {/* </Link> */}
    </div>
  );
};

export default Step_3;
