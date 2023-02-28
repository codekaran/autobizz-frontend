import {containerClosed,containerOpen,container,btnGroup} from "./EmailModal.module.scss";
import Button from '../../../../globals/button/Button';
import { useContext } from "react";
import ProfilePageContext from "../../../../../context/ProfilePage/ProfilePageContext";
import Input from '../../../input/Input';
import {BiSave,BiX} from 'react-icons/bi';
import ButtonLoader from '../../../ButtonLoader/ButtonLoader';
import AlertContext from "../../../../../context/Alert/AlertContext";
import AuthContext from "../../../../../context/Auth/AuthContext";
import { useEffect,useState } from "react";
const PasswordModal = ({open}) => {

//contexts
const {createAlert} = useContext(AlertContext);
const {loadUser} = useContext(AuthContext);
const {hideEditing,error,loading,updateDetails} =  useContext(ProfilePageContext);
//useeffect to check for errors
useEffect(() => {
if(error==='Invalid Credentials' || error ==='Unauthorized request'){
  createAlert('Please use correct password','E');
}
}, [error])

// Form data is an object which stores email and password of the user from the input fields
const [formData, setFormData] = useState({
newPassword: "",
currentPassword: ""
});
const { newPassword, currentPassword} = formData;

// This function updates the formData object
const handleChange = (field) => (event) => {
setFormData({ ...formData, [field]: event.target.value });
};

const handleSubmit =async (event) => {
event.preventDefault();
if(newPassword===""){ createAlert("Please fill new Password",'W'); return;}
if(currentPassword===""){ createAlert("Please fill current Password",'W'); return;}
if(await updateDetails(formData)){
  createAlert("Successfully updated Password");
  setFormData({
    newPassword: "",
    currentPassword: ""
  })
  hideEditing();
  loadUser();
}
};

const handleCancel = (event)=>{
event.preventDefault();
hideEditing();
setFormData({
  email: "",
  currentPassword: ""
})

const validateOnInput = ()=>{

}
}
  return (
   <div className={container}>
    <div className={open ? containerOpen : containerClosed}>
    <form>
      <Input placeholder={'New Password'} type='password' showPassFunc onChange={handleChange("newPassword")} value={newPassword}></Input>
      <Input placeholder={'Old Password'} type='password' showPassFunc onChange={handleChange("currentPassword")} value={currentPassword}></Input>
    </form>
    <div className={btnGroup}>
    <Button theme='light' width='fit-content' onClick={(e)=>{handleCancel(e)}} icon={<BiX/>}>Cancel</Button>
    <Button width='fit-content' onClick={(e)=>{handleSubmit(e);}} icon={loading? <ButtonLoader/> : <BiSave/>}>Save</Button>
    </div>
    </div>
   </div>
  );
};

export default PasswordModal;
