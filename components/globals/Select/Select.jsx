import React from 'react'
import styles from './Select.module.scss'
function Select(props) {
  return (
    <div className={styles.container}>
        <label htmlFor={props.name}>{props.name}</label>
        <select className={styles.select} {...props} name={props.name} id={props.name}>
            {props.options.map((option)=>
                <option className={styles.option}>{option}</option>)
            }
        </select>
    </div>
  )
}

export default Select