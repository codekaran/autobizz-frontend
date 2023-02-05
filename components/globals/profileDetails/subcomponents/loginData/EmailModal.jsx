import {containerClosed,containerOpen,container,btnGroup} from "./EmailModal.module.scss";
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
import { EmailModalSchema } from "../../../../../utils/validations/validation";


const EmailModal = ({open}) => {
//contexts//------------------------------------------------------------------------------------------------------//
  const {createAlert} = useContext(AlertContext);
  const {loadUser} = useContext(AuthContext);
  const {hideEditing,error,loading,updateDetails} =  useContext(ProfilePageContext);
//useeffect to check for errors//-----------------------------------------------------------------------------------//
  useEffect(() => {
  if(error==='Invalid Credentials' || error ==='Unauthorized request'){
    createAlert('Please use correct password','E');
  }
}, [error])

// Form data is an object which stores email and password of the user from the input fields//-----------------------//
const [formData, setFormData] = useState({
  email: "",
  currentPassword: ""
});
const { email, currentPassword} = formData;

//---------------------------------------------------------------------------------------------------------------------//
const handleChange = (field) => (event) => {
  setFormData({ ...formData, [field]: event.target.value });
};
//Validations//---------------------------------------------------------------------------------------------------------//
const handleSubmit =async (event) => {
  event.preventDefault();
 EmailModalSchema.validate(formData,{
  abortEarly:true
 }).
 then(async (values)=>{
  if(await updateDetails(values)){
  createAlert("Successfully updated Email");
  setFormData({
    email: "",
    currentPassword: ""
  })
  hideEditing();
  loadUser();}}
).catch(err=> createAlert(err.message , 'W'));
};
//---------------------------------------------------------------------------------------------------------------------//
const handleCancel = (event)=>{
  event.preventDefault();
  hideEditing();
  setFormData({
    email: "",
    currentPassword: ""
  })
}
//---------------------------------------------------------------------------------------------------------------------//
  return (
   <div className={container}>
    <div className={open ? containerOpen : containerClosed}>
    <form onSubmit={handleSubmit}>
      <Input placeholder={'New Email'} onChange={handleChange("email")} value={email}></Input>
      <Input placeholder={'Password'} type='password' onChange={handleChange("currentPassword")} value={currentPassword}></Input>
      <div className={btnGroup}>
    <Button theme='light' width='fit-content' onClick={(e)=>{handleCancel(e)}} icon={<BiX/>}>Cancel</Button>
    <Button type={'submit'} width='fit-content' icon={loading? <ButtonLoader/> : <BiSave/>}>Save</Button>
    </div>
    </form>
    </div>
   </div>
  );
};

export default EmailModal;
