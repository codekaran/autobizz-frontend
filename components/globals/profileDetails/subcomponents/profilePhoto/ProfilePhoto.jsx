import {container,main,img,section,subsection} from "./ProfilePhoto.module.scss";
import profilePicDefault from '../../../../../public/profilePhoto.jpg';
import Image from "next/image";
import Button from '../../../button/Button';
import colors from '../../../../../variables/colors';

const ProfilePhoto = (props) => {

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
            <Button theme='light'>Change</Button> :
            <Button backgroundColor={colors.yellow}>Complete</Button>  
        }
        </div>
    </div>
  );
};

export default ProfilePhoto;
