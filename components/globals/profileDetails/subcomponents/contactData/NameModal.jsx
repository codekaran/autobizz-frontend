import {containerClosed,containerOpen,container,btnGroup} from "./NameModal.module.scss";
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
import { companyNameModalSchema, customerNameModalSchema } from "../../../../../utils/validations/validation";

const NameModal = ({open}) => {
//Contexts//-----------------------------------------------------------------------------------------------------------------//  
  const {user,loadUser} = useContext(AuthContext);
  const {hideEditing,updateDetails,loading} =  useContext(ProfilePageContext);
  const {createAlert} = useContext(AlertContext);

// Form data is an object which stores email and password of the user from the input fields//---------------------------------//
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName:""
  });
  const { firstName, lastName, companyName} = formData;

//---------------------------------------------------------------------------------------------------------------------------//
  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
//Validation//----------------------------------------------------------------------------------------------------------------//
  const handleSubmit =async (event) => {
    event.preventDefault();
    
    if(user.sellerType==='Owner'){
      customerNameModalSchema.validate(formData).
      then(async (values)=>{
        if(await updateDetails(values)){
          createAlert("Successfully updated Name");
          setFormData({
            firstName: "",
            lastName: "",
            companyName:"",
          })
          hideEditing();
          loadUser();
          }
      }).catch(err=> createAlert(err.message , 'W'));}
      else{
      companyNameModalSchema.validate(formData).
      then(async (values)=>{
        if(await updateDetails(values)){
          createAlert("Successfully updated Name");
          setFormData({
            firstName: "",
            lastName: "",
            companyName:"",
          })
          hideEditing();
          loadUser();
          }
      }).catch(err=> createAlert(err.message , 'W'));}
  }
//----------------------------------------------------------------------------------------------------------------------------//
  const handleCancel = (event)=>{
    event.preventDefault();
    hideEditing();
    setFormData({
      firstName: "",
      lastName: "",
      companyName:"",
    })
  }
//----------------------------------------------------------------------------------------------------------------------------//
  return (
   <div className={container}>
    <div className={open ? containerOpen : containerClosed}>
    <form>
        {user.sellerType === 'Owner' ? 
        <>
        <Input placeholder={'First Name*'} onChange={handleChange("firstName")} value={firstName}></Input>
        <Input placeholder={'Last Name'}  onChange={handleChange("lastName")} value={lastName}></Input>
        </>
        :
        <Input placeholder={'Company Name*'} onChange={handleChange("companyName")} value={companyName}></Input>        
        }
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
};

export default NameModal;
