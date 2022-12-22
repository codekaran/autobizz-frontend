import React from 'react'
import styles from './FilterSection.module.scss';
import ModelYear from '../modelyear/ModelYear';
import FuelType from '../fuelType/FuelType';
const FilterSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.modelYear}></div>
        <div className={styles.modelYear}>
            <ModelYear/>
            <FuelType/>
        </div>
    </div>
  )
}

export default FilterSection;