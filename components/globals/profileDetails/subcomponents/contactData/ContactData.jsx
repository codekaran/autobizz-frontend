import {container,main,section,subsection} from "./ContactData.module.scss";
import Button from '../../../button/Button';
import AuthContext from '../../../../../context/Auth/AuthContext';
import { useContext } from "react";

const ContactData = (props) => {
  const {user} = useContext(AuthContext);

  return (
    <div className={container}>
        <h3>Contact Data</h3>
        <div className={main}>
            <div className={section}>
            <div className={subsection}>
                <h4>{user.sellerType === 'Owner' ? 'Customer ' : 'Company '}Name</h4>
                <p>{user.sellerType === 'Owner' ? (user.firstName+' '+user.lastName) : user.companyName}</p>
            </div>
            <Button theme='light'>Change</Button>
            </div>
            <div className={section}>
            <div className={subsection}>
                <h4>Address</h4>
                <p>{user.address}</p>
                <p>{user.postalCode}</p>
            </div>
            <Button theme='light'>Change</Button>
            </div>
            <div className={section}>
            <div className={subsection}>
                <h4>Phone</h4>
                <p>{user.mobile}</p>
            </div>
            <Button theme='light'>Change</Button>
            </div>
        </div>
    </div>
  );
};

export default ContactData;
