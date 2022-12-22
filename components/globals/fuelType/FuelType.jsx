import React from 'react'
import styles from './FuelType.module.scss';
import Button from '../button/Button';

const FuelType = () => {
  return (
    <div className={styles.container}>
        <h6>Fuel Type</h6>    
    <div className={styles.checkBoxes}>
        <div className={styles.checkbox}><input className={styles.check} type="checkbox"/>Petrol</div>
        <div className={styles.checkbox}><input className={styles.check} type="checkbox"/>Diesel</div>
        <div className={styles.checkbox}><input className={styles.check} type="checkbox"/>CNG</div>
        <Button theme='light' width='max-content' fontSize='10px' margin='5px 0px 0px 0px'>Apply</Button>
    </div>
    </div>
  )
}

export default FuelType;