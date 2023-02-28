import React from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./Steps.module.scss";
import Button from "../../globals/button/Button";
import axios from "/axios/index.js";
import AdContext from "../../../context/Ad/AdContext";
import AuthContext from "../../../context/Auth/AuthContext";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaCarAlt } from "react-icons/fa";
import setAuthToken from "../../../utils/setAuthToken";
import AlertContext from "../../../context/Alert/AlertContext";

const Step_3 = () => {
  // ############ component state ###########
  const [isClicked, setIsClicked] = useState("");
  const [isAdUploading, setIsAdUploading] = useState(false);
  const [isAdUploaded, setIsAdUploaded] = useState(false);
  const [data, setData] = useState({
    condition: "",
    description: "",
    file: "",
  });

  // ############ initialize ###########
  const router = useRouter();
  const ctx = useContext(AdContext);
  const auth_ctx = useContext(AuthContext);
  const {createAlert} = useContext(AlertContext);

  // ############ functions ###########
  const handleChange = (name) => (e) => {
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

  };

  const createFormData = () => {
    let finalData = { ...ctx.adFormData, ...data };
    let fd = new FormData();
    for (let key in finalData) {
      if (key === "file") {
        for (let image of finalData[key]) {
          fd.append(key, image);
          let imageSize = image.size / 1000000;
          if (imageSize > 2) {
            createAlert(`Image ${image.name} greater than 2mb`,'W');
          }
        }
      } else {
        fd.append(key, finalData[key]);
      }
    }
    return fd;
  };

  const handleSubmit = async () => {
   setIsAdUploading(true);
   let formData = createFormData();
   
    try {
      let result = await axios.post(
        `/seller-api/ads/ads`,
        formData,
        {
          auth: {
            username: "karan",
            password: 123,
          },
        }
      );
      if (result.data == "Ad already exists") {
        createAlert("Ad already exists!",'E')
      }
      if (result.data.includes("Ad Id:")) {
        createAlert("Ad successfully uploaded!",'S');
      }
      setIsAdUploading(false);
      setIsAdUploaded(true);
    } catch (err) {
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
      </div>
      {/* //TODO: Redirect to ad dashboard */}
      {isAdUploaded ? (
        <div className={styles.homeAd}>
          <Link href="/ads/create/step-1">
            <Button padding='10px 30px'>New Ad</Button>
          </Link>
          <Link href="/">
            <Button padding='10px 30px'>Home</Button>
          </Link>
        </div>
      ) : isAdUploading ? (
        <TailSpin
          height="50"
          width="50"
          color="#1a374d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <Button padding='10px 30px' onClick={handleSubmit} icon={<FaCarAlt/>}>Create Ad</Button>
      )}

      {/* </Link> */}
    </div>
  );
};

export default Step_3;
