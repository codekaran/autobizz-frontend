import {container,main,section,subsection} from "./LoginData.module.scss";
import profilePicDefault from '../../../../../public/profilePhoto.jpg';
import Image from "next/image";
import Button from '../../../button/Button';
import AuthContext from '../../../../../context/Auth/AuthContext';
import { useContext, useState } from "react";
import ProfilePageContext from "../../../../../context/ProfilePage/ProfilePageContext";
import EmailModal from "./EmailModal";
const LoginData = (props) => {
  const {user} = useContext(AuthContext);
  const ProfilePageCtx = useContext(ProfilePageContext);
  const {setShowEmailModal,editEmail} = ProfilePageCtx;
  
  return (
    <div className={container}>
        <h3>Login Data</h3>
        <div className={main}>
            <div className={section}>
            <div className={subsection}>
                <h4>Email</h4>
                <p>{user.email}</p>
            </div>
            <Button theme='light' onClick={()=>setShowEmailModal(true)}>Change</Button>
            {editEmail && <EmailModal/>}
            </div>
            <div className={section}>
            <div className={subsection}>
                <h4>Password</h4>
                <p>•••••••••••</p>
            </div>
            <Button theme='light'>Change</Button>
            </div>
        </div>
    </div>
  );
};

export default LoginData;
