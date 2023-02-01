import {container,main,section,subsection,details,modal} from "./ContactData.module.scss";
import Button from '../../../button/Button';
import AuthContext from '../../../../../context/Auth/AuthContext';
import ProfilePageContext from '../../../../../context/ProfilePage/ProfilePageContext';
import { useContext } from "react";
import NameModal from "./NameModal";
import { BiEdit } from "react-icons/bi";
import PhoneNumberModal from "./PhoneNumberModal";
import AddressModal from './AddressModal';

const ContactData = (props) => {
  const {user} = useContext(AuthContext);
  const {editing,showEditing,editName,editMobile,editAddress} = useContext(ProfilePageContext);

  return (
    <div className={container}>
        <h3>Contact Data</h3>
        <div className={main}>
            <div className={section}>
            <div className={subsection}>
                <div className={details}>
                <h4>{user.sellerType === 'Owner' ? 'Customer ' : 'Company '}Name</h4>
                <p>{user.sellerType === 'Owner' ? (user.firstName+' '+user.lastName) : user.companyName}</p>
                </div>
                <Button theme='light' disabled={editing} onClick={()=>{showEditing('name')}} icon={<BiEdit/>}>Edit</Button>
            </div>
            <div className={modal}>
                <NameModal open={editName}></NameModal>
            </div>
            </div>
            <div className={section}>
            <div className={subsection}>
                <div className={details}>
                <h4>Address</h4>
                <p>{user.address}</p>
                <p>{user.postalCode}</p>
                <p>{user.country}</p>
                </div>
                <Button theme='light' disabled={editing} icon={<BiEdit/>} onClick={()=>{showEditing('address')}}>Edit</Button>
            </div>
            <div className={modal}>
                <AddressModal open={editAddress}></AddressModal>
            </div>
            </div>
            <div className={section}>
            <div className={subsection}>
                <div className={details}>
                <h4>Phone</h4>
                <p>{user.mobile}</p>
                </div>
                <Button theme='light' disabled={editing} icon={<BiEdit/>} onClick={()=>{showEditing('mobile')}}>Edit</Button>
            </div>
            <div className={modal}>
                <PhoneNumberModal open={editMobile}></PhoneNumberModal>
            </div>
            </div>
        </div>
    </div>
  );
};

export default ContactData;
