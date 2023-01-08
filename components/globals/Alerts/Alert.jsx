import React, { useEffect, useState } from 'react'
import styles from './Alert.module.scss';
import { BiInfoCircle, BiCheckCircle,BiXCircle } from 'react-icons/bi';
import colors from '../../../variables/colors';

const Alert = ({message,type}) => {
  const [show,setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    setTimeout(()=>{setShow(false)}, 3000)
  }, [])
  
  return (
    <div className={show ? styles.alertVisible : styles.alertHidden} 
    style={type === 'S' ? 
          {backgroundColor:colors.green,borderLeft:`10px solid ${colors.greenAccent}`} : 
          (type === 'E' ? 
          {backgroundColor:colors.red,borderLeft:`10px solid ${colors.redAccent}`} : 
          {backgroundColor:colors.yellow,borderLeft:`10px solid ${colors.yellowAccent}`})}>
        
        {type === 'S' ? 
          <BiCheckCircle/>: 
          (type === 'E' ? 
          <BiXCircle/> : 
          <BiInfoCircle/>)}
        <p>
        {message}
        </p>
    </div>
  )
}

export default Alert;