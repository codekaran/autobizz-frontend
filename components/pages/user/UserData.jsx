import styles from "./UserData.module.scss";
import AuthContext from "../../../context/auth-context";
import { useContext, useEffect, useState } from "react";
import { getSession } from "../../globals/funtions/helper";
import { useRouter } from "next/router";
import axios from "axios";
import TextSkeleton from "../../globals/skeletons/text";
import { server } from "../../../variables/server";
const UserData = (props) => {
  let ctx = useContext(AuthContext);
  const router = useRouter();
  const [contentLoaded, setContentLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState({
    decodedToken: {
      firstName: "",
    },
    status: false,
  });
  const [userData, setUserData] = useState({});
  const [changePassword, setChangePassword] = useState(false);
  const [profileEditMode, setProfileEditMode] =useState(false);

  useEffect(async () => {
    userLoggedInStatus();
  }, []);

  // get data of the user from conttext or local storage
  const userLoggedInStatus = async () => {
    let data = getSession(ctx);
    if (data) {
      setIsLoggedIn(data);
      console.log(data);
      let response = await axios.get(
        `${server.serverURL}/seller-api/sellers/userData/` +
          data.decodedToken.id
      );
      console.log(response);
      setUserData(response.data);
      setContentLoaded(true);
    } else {
      router.push("/login");
    }
  };
  const handlePasswordChangeView = () => {
    setChangePassword(true);
  };

  const handleSaveProfile = () =>{
    setProfileEditMode(false);
  }

  return (
    <div className={styles.userData}>
      <div className={styles.userDetails}>
        <h3>Profile details {profileEditMode ? <></>:<span className={styles.edit} onClick={(e)=>setProfileEditMode(true)}></span>}</h3>
        <div className={styles.info}>
          <div className={styles.row}>

            {userData.sellerType === 'Dealer' ? 
            //Dealer
            <>
            <div className={styles.col}>
              <h6>Company Name</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.companyName} type="text" onChange={(e)=>{setUserData({...userData,companyName:e.target.value})}}/> : <p>{userData.companyName}</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
            </> : 
            //Owner
            <>
            <div className={styles.col}>
              <h6>First Name</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.firstName} type="text" onChange={(e)=>{setUserData({...userData,firstName:e.target.value})}}/> : <p>{userData.firstName}</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
            <div className={styles.col}>
              <h6>Last Name</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.lastName} type="text" onChange={(e)=>{setUserData({...userData,lastName:e.target.value})}}/> : <p>{userData.lastName}</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
            </>
          }
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <h6>Phone</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.mobile} type="number" onChange={(e)=>{setUserData({...userData,mobile:e.target.value})}}/> : <p>{userData.mobile}</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
            <div className={styles.col}>
              <h6>Email</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.email} type="email" onChange={(e)=>{setUserData({...userData,email:e.target.value})}}/> : <p>{userData.email}</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
            <div className={styles.col}>
              <h6>{userData.sellerType === 'Dealer' && 'Company '}Address</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.address} type="text" onChange={(e)=>{setUserData({...userData,address:e.target.value})}}/> : <p>{userData.address}</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
            <div className={styles.col}>
              <h6>Postal Code</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.postalCode} type="text" onChange={(e)=>{setUserData({...userData,postalCode:e.target.value})}}/> : <p>{userData.postalCode }</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
            <div className={styles.col}>
              <h6>Country</h6>
              {profileEditMode ? <input className={styles.inputBox} value={userData.country} type="text" onChange={(e)=>{setUserData({...userData,country:e.target.value})}}/> : <p>{userData.country }</p>}
              {!contentLoaded && <TextSkeleton></TextSkeleton>}
            </div>
            {profileEditMode && <div className={styles.btn}><div className={styles.button} onClick={(e)=>{handleSaveProfile()}}>Save</div></div>}
          </div>
        </div>
      </div>
      <div className={styles.password}>
        <h3>Password</h3>
        {changePassword ? (
          <div className={styles.changePassword}>
            <div className={styles.inputPassword}>
              <input placeholder="Current Password" type="password" />
              <input placeholder="New Password" type="password" />
              <input placeholder="Confirm Password" type="password" />
            </div>
            <div className={styles.btn}>
              <p>Forgot password? Change password through email</p>
              <div className={styles.button}>Update</div>
            </div>
          </div>
        ) : (
          <p onClick={handlePasswordChangeView}>Change Password</p>
        )}
      </div>
    </div>
  );
};

export default UserData;
