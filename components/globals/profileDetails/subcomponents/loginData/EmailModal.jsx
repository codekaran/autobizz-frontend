import {container} from "./EmailModal.module.scss";
import Button from '../../../../globals/button/Button';
import { useContext } from "react";
import ProfilePageContext from "../../../../../context/ProfilePage/ProfilePageContext";

const EmailModal = (props) => {

  const {hideEditing} =  useContext(ProfilePageContext);

  return (
    <div className={container}>
    Hello
    <Button onClick={()=>{hideEditing()}}>Save</Button>
    </div>
  );
};

export default EmailModal;
