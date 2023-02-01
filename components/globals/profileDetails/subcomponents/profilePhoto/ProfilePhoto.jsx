import {container,main,img,section,subsection} from "./ProfilePhoto.module.scss";
import profilePicDefault from '../../../../../public/profilePhoto.jpg';
import Image from "next/image";
import ProfilePageContext from '../../../../../context/ProfilePage/ProfilePageContext';
import Button from '../../../button/Button';
import { BiEdit } from "react-icons/bi";
import { useContext } from "react";
const ProfilePhoto = (props) => {
  const {editing} = useContext(ProfilePageContext);
  return (
    <div className={container}>
        <h3>Profile Photo</h3>
        <div className={main}>
            <div className={img}>
            <Image src={profilePicDefault} layout='responsive'></Image>
            </div>
            <div className={section}>
                <div className={subsection}>
                    <h4>Profile Photo</h4>
                    <p>Only visible for you</p>
                </div>
            </div>
            {props.completed ? 
            <Button theme='light' disabled={editing} icon={<BiEdit/>}>Edit</Button> :
            <Button disabled={editing}>Complete</Button>  
        }
        </div>
    </div>
  );
};

export default ProfilePhoto;
