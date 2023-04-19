import React from 'react'
import styles from './Features.module.scss'
function Features(props) {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <h5>Airbags</h5>
          <p>N/A</p>
        </li>
        <li>
          <h5>Central Locking</h5>
          <p>Yes</p>
        </li>
        <li>
          <h5>Seat Upholstery</h5>
          <p>N/A</p>
        </li>
        <li>
          <h5>Sunroof / Moonroof</h5>
          <p>No</p>
        </li>
        <li>
          <h5>Integrated (in-dash) Music System</h5>
          <p>Yes</p>
        </li>
        <li>
          <h5>Rear AC</h5>
          <p>No</p>
        </li>
        <li>
          <h5>Outside Rear View Mirrors (ORVMs)</h5>
          <p>Yes</p>
        </li>
        <li>
          <h5>Power Windows</h5>
          <p>Front & Rear</p>
        </li>
        <li>
          <h5>Engine start-stop</h5>
          <p>No</p>
        </li>
        <li>
          <h5>Headlamps</h5>
          <p>Halogen</p>
        </li>
      </ul>
    </div>
  )
}

export default Features