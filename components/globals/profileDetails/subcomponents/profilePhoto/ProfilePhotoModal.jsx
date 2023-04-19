import {containerClosed,containerOpen,container,btnGroup,img,avatars,selected} from "./ProfilePhotoModal.module.scss";
import Button from '../../../../globals/button/Button';
import { useContext, useEffect } from "react";
import ProfilePageContext from "../../../../../context/ProfilePage/ProfilePageContext";
import Input from '../../../input/Input';
import {BiSave,BiX} from 'react-icons/bi';
import colors from "../../../../../variables/colors";
import { useState } from "react";
import ButtonLoader from '../../../ButtonLoader/ButtonLoader';
import AlertContext from "../../../../../context/Alert/AlertContext";
import AuthContext from "../../../../../context/Auth/AuthContext";
import image1 from '../../../../../public/avatars/1.jpg';
import image2 from '../../../../../public/avatars/2.jpg';
import image3 from '../../../../../public/avatars/3.jpg';
import image4 from '../../../../../public/avatars/4.jpg';
import Image from "next/image";
const EmailModal = ({open}) => {
//state//------------------------------------------------------------------------------------------------------//
const [selectedID,setSelected] = useState('1');
//contexts//------------------------------------------------------------------------------------------------------//
  const {createAlert} = useContext(AlertContext);
  const {loadUser} = useContext(AuthContext);
  const {hideEditing,error,loading,updateDetails} =  useContext(ProfilePageContext);
//Validations//---------------------------------------------------------------------------------------------------------//
const handleSubmit =async (event) => {
  console.log('submit avatar')
};
//---------------------------------------------------------------------------------------------------------------------//
const handleCancel = (event)=>{
  event.preventDefault();
  hideEditing();
}
//---------------------------------------------------------------------------------------------------------------------//
  return (
   <div className={container}>
    <div className={open ? containerOpen : containerClosed}>
        <div className={avatars}>
          <div className={`${img} ${selectedID==='1' && selected}`} onClick={(e)=>{setSelected(e.target.id);console.log(e.target.id)}}>
          <Image id='1' src={image1}></Image>
          </div>
          <div className={`${img} ${selectedID==='2' && selected}`} onClick={(e)=>{setSelected(e.target.id);console.log(e.target.id)}}>
          <Image id='2' src={image2}></Image>
          </div>
          <div className={`${img} ${selectedID==='3' && selected}`} onClick={(e)=>{setSelected(e.target.id);console.log(e.target.id)}}>
          <Image id='3' src={image3}></Image>
          </div>
          <div className={`${img} ${selectedID==='4' && selected}`} onClick={(e)=>{setSelected(e.target.id);console.log(e.target.id)}}>
          <Image id='4' src={image4}></Image>
          </div>
          <div className={`${img} ${selectedID==='5' && selected}`} onClick={(e)=>{setSelected(e.target.id);console.log(e.target.id)}}>
          <Image id='5' src={image4}></Image>
          </div>
        </div>
        <div className={btnGroup}>
        <Button theme='light' width='fit-content' onClick={(e)=>{handleCancel(e)}} icon={<BiX/>}>Cancel</Button>
        <Button type={'submit'} width='fit-content' icon={loading? <ButtonLoader/> : <BiSave/>}>Save</Button>
        </div>
    </div>
   </div>
  );
};

export default EmailModal;
