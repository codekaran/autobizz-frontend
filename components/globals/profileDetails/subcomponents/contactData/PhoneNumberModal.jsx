import {containerClosed,containerOpen,container,btnGroup} from "./PhoneNumberModal.module.scss";
import Button from '../../../button/Button';
import { useContext, useState } from "react";
import ProfilePageContext from "../../../../../context/ProfilePage/ProfilePageContext";
import Input from '../../../input/Input';
import { BiSave,BiX} from 'react-icons/bi';
import AuthContext from "../../../../../context/Auth/AuthContext";
import CheckBox from "../../../../globals/checkbox/CheckBox";
import AlertContext from "../../../../../context/Alert/AlertContext";
import ButtonLoader from "../../../ButtonLoader/ButtonLoader";
import { phoneNumberModalSchema } from "../../../../../utils/validations/validation";

const PhoneNumberModal = ({open}) => {
//Contexts//-----------------------------------------------------------------------------//
  const {user,loadUser} = useContext(AuthContext);
  const {hideEditing,updateDetails,loading} =  useContext(ProfilePageContext);
  const {createAlert} = useContext(AlertContext);
//-Form data is an object which stores email and password of the user from the input fields-//
  const [formData, setFormData] = useState({
    mobile: "",
    countryCode:"+1"
  });
  const {mobile,countryCode} = formData;
//------------------------------------------------------------------------------------------//
  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
//------------------------------------------------------------------------------------------//
  const handleSubmit =async (event) => {
    event.preventDefault();
//validation & submission//-----------------------------------------------------------------//
    phoneNumberModalSchema.validate(formData).
    then(async (values)=>{
      if(await updateDetails(values)){
        createAlert("Successfully updated mobile number");
        setFormData({
          mobile: "",
    countryCode:"+1"
        })
        hideEditing();
        loadUser();
        }
    }).catch(err=> createAlert(err.message , 'W'));}
//------------------------------------------------------------------------------------------//
  const handleCancel = (event)=>{
    event.preventDefault();
    hideEditing();
    setFormData({
      mobile: "",
    countryCode:"+1"
    })
  }
//------------------------------------------------------------------------------------------//
  return (
   <div className={container}>
    <div className={open ? containerOpen : containerClosed}>
    <form>
        <Input placeholder={'Country Code*'} onChange={handleChange("countryCode")} value={countryCode}></Input>
        <Input placeholder={'Phone number*'} onChange={handleChange("mobile")} value={mobile}></Input>
        <div style={{display:'flex',gap:'10px', alignItems:'center'}}>
          <CheckBox name='Show in Ad'/>
        </div>
    </form>
    <div className={btnGroup}>
    <Button theme='light' width='fit-content' onClick={(e)=>{handleCancel(e)}} icon={<BiX/>}>Cancel</Button>
    <Button width='fit-content' onClick={(e)=>{handleSubmit(e);}} icon={loading? <ButtonLoader/> : <BiSave/>}>Save</Button>
    </div>
    </div>
   </div>
  );
  }
export default PhoneNumberModal;
