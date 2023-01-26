import {container,main,heading} from "./ProfileDetails.module.scss";
import AuthContext from "../../../context/Auth/AuthContext";
import ProfilePageContext from '../../../context/ProfilePage/ProfilePageContext';
import { useContext, useEffect, useState } from "react";
import Button from '../../globals/button/Button';
import Loader from "../../globals/skeletons/loader";
import ProfilePhoto from "./subcomponents/profilePhoto/ProfilePhoto";
import LoginData from "./subcomponents/loginData/LoginData";
import ContactData from "./subcomponents/contactData/ContactData";
import DeleteAccount from "./subcomponents/deleteAccount/DeleteAccount";
import EmailModal from './subcomponents/loginData/EmailModal';

const ProfileDetails = (props) => {
  //contexts
  const AuthCtx = useContext(AuthContext);
  const {user} = AuthCtx;
  const ProfilePageCtx = useContext(ProfilePageContext);
  const {editEmail,editing} = ProfilePageCtx;
  //return
  return (
    <div className={container}>
    {user === null ? 
    <div className={main}>
        <Loader/>
    </div> 
    :
    <div className={main}>    
    <div className={heading}><h2>Your account details and settings</h2></div>
        <ProfilePhoto completed={false}/>
        <LoginData/>
        <ContactData/>
        <DeleteAccount/>
    </div>
    }
    </div>
  );
};

export default ProfileDetails;
