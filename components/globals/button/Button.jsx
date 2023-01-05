import styles from "./Button.module.scss";
import { colors } from "../../../variables/colors";

const index = (props) => {
  return (
    <button style={{
      color:props.color,
      backgroundColor: props.backgroundColor,
      backgroundImage:props.backgroundImage,
      border:props.border,
      borderRadius: props.radius,
      height:props.height,
      width:props.width,
      margin:props.margin,
      padding:props.padding,
      margin:props.margin,
      fontSize:props.fontSize
   }} className={props.theme === 'light' ? styles.btn_light : styles.btn_primary} onClick={props.onClick}>
      {props.children}{props.icon && <div className={styles.icon} style={{fontSize:props.fontSize}}>{props.icon}</div>}
    </button>
  );
};

export default index;
