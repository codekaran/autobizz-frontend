import React,{useState} from 'react'
import styles,{content_open,content_close} from './CarType.module.scss';
import Button from '../button/Button';
import { AiOutlineDown } from 'react-icons/ai';

const CarType = () => {

  const [toggle,setToggle]=useState(false);

  const handleToggle= ()=>{
    setToggle(!toggle);
  }

  return (
    <div className={styles.container}>
      <div className={styles.filterName} onClick={()=>{handleToggle()}}>
      <h6>Car Type</h6>    
      <AiOutlineDown/>
      </div>
      <div className={toggle ? content_open : content_close}>
        <div className={styles.checkBoxes}>
        <div className={styles.checkbox}><input className={styles.check} type="checkbox"/>Hatchback</div>
        <div className={styles.checkbox}><input className={styles.check} type="checkbox"/>Sedan</div>
        <div className={styles.checkbox}><input className={styles.check} type="checkbox"/>SUV</div>
        <div className={styles.checkbox}><input className={styles.check} type="checkbox"/>Luxury Sedan</div>
        <div className={styles.checkbox}><input className={styles.check} type="checkbox"/>Luxury SUV</div>
        {/* <Button theme='light' width='max-content' fontSize='10px' margin='5px 0px 0px auto'>Apply</Button> */}
        </div>
    </div>
    </div>
  )
}

export default CarType;