import React from 'react'
import styles from './Specifications.module.scss'
function Specifications({data}) {
  return (
    <div className={styles.container}>
      <ul>
    <li>
      <h5>Fuel type</h5>
      <p>{data.fuel}</p>
    </li>
    <li>
        <h5>Transmission</h5>
        <p>{data.gearbox}</p>
    </li>
    <li>
      <h5>Engine type</h5>
      <p>4 cylinder inline petrol engine</p>
    </li>
    <li>
        <h5>Power</h5>
        <p>{data.power + ' HP'}</p>
    </li>
    <li>
      <h5>Fuel tank capacity (litres)</h5>
      <p>35</p>
    </li>
    <li>
      <h5>Mileage (kmpl) 19.81</h5>
      <p>19.81</p>
    </li>
    <li>
      <h5>Seating capacity</h5>
      <p>5</p>
    </li>
    <li>
      <h5>Steering type</h5>
      <p>Power assisted (Electric)</p>
    </li>
    <li>
      <h5>Alternate fuel type</h5>
      <p>N/A</p>
    </li>
    <li>
      <h5>Cubic Capacity</h5>
      <p>N/A</p>
    </li>
  </ul></div>
  )
}

export default Specifications