import styles from "./UserAds.module.scss";

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../../context/auth-context";
import { getSession } from "../../globals/funtions/helper";

import AdImages from "./AdImages";

const UserAds = () => {
  const ctx = useContext(AuthContext);

  const [userAds, setUserAds] = useState([]);
  useEffect(() => {
    getUserAds();
  }, []);

  const getUserAds = async () => {
    let data = getSession(ctx);
    if (data) {
      // setIsLoggedIn(data);
      console.log(data);
      let response = await axios.get(
        "http://192.168.1.8:8000/seller-api/ads/" + data.decodedToken.id + "/ads",
        {
          auth: {
            username: "karan",
            password: 123,
          },
        }
      );
      response = response.data;
      let imagesWithLoadStatus = [];
      for (let ad of response) {
        imagesWithLoadStatus = [];

        for (let image of ad.images)
          imagesWithLoadStatus.push({ url: image, loaded: false });
        ad.images = imagesWithLoadStatus;
        ad.editModeOn = 0;
      }

      console.log(response);
      setUserAds(response);
      // console.log(userAds[0].firstRegistration);
    } else {
      router.push("/login");
    }
  };

  const handleEditMode = (index) => (event) => {
    let arr=[...userAds];
    arr[index].editModeOn = arr[index].editModeOn == 0 ? 1 : 0;    
    setUserAds(arr);
    console.log(userAds[index].editModeOn);
  };

  return (
    <>
      {userAds.map((item, index) => (
        <div key={index} className={styles.ads}>
          <h3>
            {item.make + " " + item.model}
            <span
              onClick={handleEditMode(index)}
              className={styles.edit}
            ></span>
          </h3>

          <div className={styles.carDetails}>
            <div className={styles.row}>
              <div className={styles.col}>
                <h6>Manufacturing year</h6>
                {item.editModeOn == 1 ? <input className={styles.inputBox} value={item.firstRegistration} type="text" /> : <p>{item.firstRegistration}</p>} 
              </div>
              <div className={styles.col}>
                <h6>Fuel type</h6>
                {item.editModeOn == 1 ? <input value={item.fuel} type="text" /> : <p>{item.fuel}</p>} 
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <h6>KM's driven</h6>
                {item.editModeOn == 1 ? <input value={item.mileage} type="text" /> : <p>{item.mileage}</p>} 
              </div>
              <div className={styles.col}>
                <h6>Engine power</h6>
                {item.editModeOn == 1 ? <input value={item.power} type="text" /> : <p>{item.power}</p>} 
              </div>
              <div className={styles.col}>
                <h6>No. of owner’s</h6>
                {item.editModeOn == 1 ? <input value={item.condition} type="text" /> :<p>{item.condition || "-"} </p>} 
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <h6>Transmission</h6>
                {item.editModeOn == 1 ? <input value={item.gearbox} type="text" /> : <p>{item.gearbox}</p>} 
              </div>
              <div className={styles.col}>
                <h6>CO2</h6>
                {item.editModeOn == 1 ? <input value={item.co2} type="text" /> : <p>{item.co2 || "-"}</p>} 
              </div>
              <div className={styles.col}>
                <h6>VAT rate</h6>
                {item.editModeOn == 1 ? <input value={item.vatRate} type="text" /> : <p>{item.vatRate || "-"}</p>} 
              </div>
            </div>

            <div className={styles.images}>
              <h6>Images</h6>
              <AdImages images={item.images}></AdImages>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserAds;
