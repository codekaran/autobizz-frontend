import {containerClosed,containerOpen,container,btnGroup} from "./PhoneNumberModal.module.scss";
import Button from '../../../button/Button';
import { useContext, useState } from "react";
import ProfilePageContext from "../../../../../context/ProfilePage/ProfilePageContext";
import Input from '../../../input/Input';
import {BiCheckbox, BiLoader, BiSave,BiX} from 'react-icons/bi';
import colors from "../../../../../variables/colors";
import AuthContext from "../../../../../context/Auth/AuthContext";
import CheckBox from "../../../../globals/checkbox/CheckBox";
import AlertContext from "../../../../../context/Alert/AlertContext";
import Loader from '../../../skeletons/loader';
import ButtonLoader from "../../../ButtonLoader/ButtonLoader";

const PhoneNumberModal = ({open}) => {
  const {user,loadUser} = useContext(AuthContext);
  const {hideEditing,updateDetails,loading} =  useContext(ProfilePageContext);
  const {createAlert} = useContext(AlertContext);

  // Form data is an object which stores email and password of the user from the input fields
  const [formData, setFormData] = useState({
    address: user.address,
    postalCode:user.postalCode,
    country:user.country,
    city:user.city
  });
  const {address,postalCode,country,city} = formData;

  // This function updates the formData object
  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    if(address==="" || postalCode==="" || country===""){ createAlert("Please fill all fields",'W'); return;}
    if(await updateDetails(formData)){
    createAlert("Successfully updated mobile number");
    loadUser();
    setFormData({
      address: user.address,
      postalCode:user.postalCode,
      country:user.country,
      city:user.city
    })
    hideEditing();
    
  }
  };

  const handleCancel = (event)=>{
    event.preventDefault();
    hideEditing();
    setFormData({
      address: user.address,
      postalCode:user.postalCode,
      country:user.country,
      city:user.city
    })
  }

  return (
   <div className={container}>
    <div className={open ? containerOpen : containerClosed}>
    <form>
        <Input placeholder={'Address*'} onChange={handleChange("address")} value={address}></Input>
        <Input placeholder={'City*'} onChange={handleChange("city")} value={city}></Input>
        <Input placeholder={'Postal Code*'} type="number" onChange={handleChange("postalCode")} value={postalCode}></Input>
        <Input placeholder={'Country*'} onChange={handleChange("country")} value={country}></Input>
    </form>
    <div className={btnGroup}>
    <Button theme='light' width='fit-content' onClick={(e)=>{handleCancel(e)}} icon={<BiX/>}>Cancel</Button>
    <Button width='fit-content' onClick={(e)=>{handleSubmit(e);}} icon={loading? <ButtonLoader/> : <BiSave/>}>Save</Button>
    </div>
    </div>
   </div>
  );
};

export default PhoneNumberModal;
