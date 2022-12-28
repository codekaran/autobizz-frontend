import React from 'react'
import styles from './FilterSection.module.scss';
import ModelYear from '../modelyear/ModelYear';
import FuelType from '../fuelType/FuelType';
import Price from '../price/Price';
import KilometersDriven from '../kilometersDriven/KilometersDriven';
import CarType from '../carType/CarType';
const FilterSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.modelYear}></div>
        <div className={styles.modelYear}>
            <ModelYear/>
            <FuelType/>
            <Price/>
            <KilometersDriven/>
            <CarType/>
        </div>
    </div>
  )
}

export default FilterSection;