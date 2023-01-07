import React from 'react'
import styles from './Alert.module.scss';
import { BiInfoCircle } from 'react-icons/bi';
const Alert = ({message}) => {
  return (
    <div className={styles.alert}>
        <BiInfoCircle></BiInfoCircle><p>
        {message}
        </p>
    </div>
  )
}

export default Alert;