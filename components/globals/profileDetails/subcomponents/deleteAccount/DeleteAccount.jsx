import {container,main,img,section,subsection} from "./DeleteAccount.module.scss";
import profilePicDefault from '../../../../../public/profilePhoto.jpg';
import Image from "next/image";
import Button from '../../../button/Button';
import AuthContext from '../../../../../context/Auth/AuthContext';
import { useContext } from "react";
import {BiTrash} from 'react-icons/bi';
import ProfilePageContext from "../../../../../context/ProfilePage/ProfilePageContext";

const DeleteAccount = (props) => {
  const {user} = useContext(AuthContext);
  const {editing} = useContext(ProfilePageContext)
  const createdAt = new Date(user.createdAt);
  const monthName = ['January','February','March','April','May','June','July','August','September','October','November','December']
  return (
    <div className={container}>
        <h3>Delete Account</h3>
        <div className={main}>
            <div className={img}>
            <Image src={profilePicDefault} layout='responsive'></Image>
            </div>
            <div className={section}>
                <div className={subsection}>
                    <h4>{user.email}</h4>
                    <p>Member since {monthName[createdAt.getUTCMonth()]+' '+createdAt.getUTCFullYear()}</p>
                </div>
            </div>
            <Button theme='danger' disabled={editing} icon={<BiTrash/>}>Delete Account</Button>
        </div>
    </div>
  );

  
};

export default DeleteAccount;
