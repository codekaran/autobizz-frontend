import React, { useEffect, useState } from 'react'
import styles from './Alert.module.scss';
import { BiInfoCircle } from 'react-icons/bi';
const Alert = ({message}) => {
  const [show,setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    setTimeout(()=>{setShow(false)}, 3000)
  }, [])
  
  return (
    <div className={show ? styles.alertVisible : styles.alertHidden}>
        <BiInfoCircle></BiInfoCircle><p>
        {message}
        </p>
    </div>
  )
}

export default Alert;