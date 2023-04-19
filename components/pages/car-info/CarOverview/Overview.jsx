import React from 'react'
import styles from './Overview.module.scss'
import { GiPathDistance,GiGasPump } from "react-icons/gi";
import {BsClockHistory,BsCalendarDate,BsExclamationTriangle,BsGear,BsHash,BsGearWideConnected} from "react-icons/bs" 
import {TbEngine} from 'react-icons/'
function Overview(props) {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <h5><span><BsClockHistory/></span>History</h5>
          <p>Non-Accidental
            {/* accidentDamaged */}
          </p>
        </li>
        <li>
          <h5><span><GiPathDistance/></span>Kilometeres Driven</h5>
          <p>{new Intl.NumberFormat('en-IN').format(props.data.mileage) + ' Km'}</p>
        </li>
        <li>
          <h5><span><BsCalendarDate/></span>Registered In</h5>
          <p>{props.data.firstRegistration}</p>
        </li>
        <li>
          <h5><span><BsExclamationTriangle/></span>Condition</h5>
          <p>{props.data.condition}</p>
        </li>
        <li>
          <h5><span><GiGasPump/></span>Fuel type</h5>
          <p>{props.data.fuel}</p>
        </li>
        <li>
          <h5><span><BsGear/></span>Transmission</h5>
          <p>{props.data.gearbox}</p>
        </li>
        <li>
          <h5><span><BsHash/></span>Registration Number</h5>
          <p>HHN-525657</p>
        </li>
        <li>
          <h5><span><BsGearWideConnected/></span>Power</h5>
          <p>{props.data.power + ' CC'}</p>
        </li>
      </ul>
    </div>
  )
}

export default Overview