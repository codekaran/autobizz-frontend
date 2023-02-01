import {container,main,section,subsection,modal,details} from "./LoginData.module.scss";
import profilePicDefault from '../../../../../public/profilePhoto.jpg';
import Image from "next/image";
import Button from '../../../button/Button';
import AuthContext from '../../../../../context/Auth/AuthContext';
import { useContext, useState } from "react";
import ProfilePageContext from "../../../../../context/ProfilePage/ProfilePageContext";
import EmailModal from "./EmailModal";
import { BiEdit } from "react-icons/bi";
import PasswordModal from "./PasswordModal";
const LoginData = (props) => {
  const {user} = useContext(AuthContext);
  const ProfilePageCtx = useContext(ProfilePageContext);
  const {showEditing,editEmail,editPassword,editing} = ProfilePageCtx;
  
  return (
    <div className={container}>
        <h3>Login Data</h3>
        <div className={main}>
            <div className={section}>
            <div className={subsection}>
                <div className={details}>
                <h4>Email</h4>
                <p>{user.email}</p>
                </div>
                <Button theme='light' onClick={()=>showEditing('email')} disabled={editing} icon={<BiEdit/>}>Edit</Button>
            </div>
            <div className={modal}>
                {<EmailModal open={editEmail}/>}
            </div>
            </div>
            
            <div className={section}>
            <div className={subsection}>
                <div className={details}>
                <h4>Password</h4>
                <p>•••••••••••</p>
                </div>
                <Button theme='light' onClick={()=>showEditing('password')}  disabled={editing} icon={<BiEdit/>}>Edit</Button>
            </div>
            <div className={modal}>
            <PasswordModal open={editPassword}/>
            </div>
            </div>
            
        </div>
    </div>
  );
};

export default LoginData;
