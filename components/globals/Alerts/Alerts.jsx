import React,{useContext, useState} from 'react'
import styles,{content_open,content_close} from './Alerts.module.scss';
import Button from '../button/Button';
import { AiOutlineDown } from 'react-icons/ai';
import AlertContext from '../../../context/Alert/AlertContext';
import Alert from './Alert';

const Alerts = () => {
   const {alerts} =  useContext(AlertContext);
  return (
    <div className={styles.container}>
    {alerts.slice(Math.max(alerts.length - 2, 0)).map(alert => <Alert key={alert.id} message={alert.message}/>)}
    </div>
  )
}

export default Alerts;