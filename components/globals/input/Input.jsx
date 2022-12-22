import React from 'react'
import styles from './Input.module.scss';

const Input = ({placeholder,value,type,style}) => {
  return (
        <input style={style} type={type} className={styles.input} placeholder={placeholder} value={value}/>
  )
}

export default Input;