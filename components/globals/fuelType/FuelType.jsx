import React,{useState} from 'react'
import styles , {content_close,content_open} from './FuelType.module.scss';
import Button from '../button/Button';
import { AiOutlineDown } from 'react-icons/ai';

const FuelType = () => {

  const [toggle,setToggle]=useState(false);

  const handleToggle= ()=>{
    setToggle(!toggle);
  }

  return (
    <div className={styles.container}>
      <div className={styles.filterName} onClick={()=>{handleToggle()}}>
      <h6>Fuel Type</h6>    
      <AiOutlineDown/>
      </div>
    <div className={toggle ? content_open : content_close}>
    <div className={styles.checkBoxes}>
        <div className={styles.checkbox}><input className={styles.check} type="checkbox"/>Petrol</div>
        <div className={styles.checkbox}><input className={styles.check} type="checkbox"/>Diesel</div>
        <div className={styles.checkbox}><input className={styles.check} type="checkbox"/>CNG</div>
        {/* <Button theme='light' width='max-content' fontSize='10px' margin='5px 0px 0px auto'>Apply</Button> */}
    </div>
    </div>
    </div>
  )
}

export default FuelType;