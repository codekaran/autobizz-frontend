import {container,main,img,section,subsection,modal,header} from "./ProfilePhoto.module.scss";
import profilePicDefault from '../../../../../public/avatars/1.jpg';
import Image from "next/image";
import ProfilePageContext from '../../../../../context/ProfilePage/ProfilePageContext';
import AuthContext from '../../../../../context/Auth/AuthContext'
import ProfilePhotoModal from './ProfilePhotoModal'
import Button from '../../../button/Button';
import { BiEdit } from "react-icons/bi";
import { useContext } from "react";
const ProfilePhoto = (props) => {
  const {editing,showEditing,editAvatar} = useContext(ProfilePageContext);
  const {user} = useContext(AuthContext); 
  return (
    <div className={container}>
        <h3>Profile Photo</h3>
        <div className={main}>
            <div className={header}>
            <div className={img}>
              {/* <h3>{user.firstName.substring(0,1)+user.lastName.substring(0,1)}</h3> */}
              <Image src={profilePicDefault}>

              </Image>
            </div>
            <div className={section}>
                <div className={subsection}>
                    <h4>Avatar</h4>
                    <p>Only visible for you</p>
                </div>
            </div>
            <Button theme='light' onClick={()=>showEditing('avatar')} disabled={editing} icon={<BiEdit/>}>Edit</Button>  
            </div>
        <div className={modal}>
                {<ProfilePhotoModal open={editAvatar}/>}
        </div> 
        </div> 
    </div>
  );
};

export default ProfilePhoto;
