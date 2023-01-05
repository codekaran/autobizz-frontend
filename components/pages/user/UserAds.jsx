import styles from "./UserAds.module.scss";
import Loader from "../../globals/skeletons/loader";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { getSession } from "../../globals/funtions/helper";
import { server } from "../../../variables/server";
import AdImages from "./AdImages";

const UserAds = () => {
  const ctx = useContext(AuthContext);

  const [userAds, setUserAds] = useState([]);
  useEffect(() => {
    getUserAds();
  }, []);
  const [adsLoading,setAdsLoading] = useState(true);

  const getUserAds = async () => {
    let data = getSession(ctx);
    if (data) {
      // setIsLoggedIn(data);
      console.log(data);
      let response = await axios.get(
        `${server.serverURL}/seller-api/ads/` + data.decodedToken.id + "/ads",
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
      setAdsLoading(false);
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
      {adsLoading ? 
      <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}><Loader/></div>
      :
      <>{(!adsLoading && userAds.length === 0)? 
      <div className={styles.noAds}>
        {console.log('empty array')}
        <h3>You haven't posted an ad yet!</h3>
      </div>
      :
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
      }</>
    }
    </>
  );
};

export default UserAds;
