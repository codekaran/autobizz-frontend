import React, { useState,useEffect } from 'react'
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import {input,inputContainer,icon} from './Input.module.scss';

const Input = (props) => {
  const [type,setType] = useState(props.type);

  const showPass = () => {
    if (type==='password')setType('text')
    else setType('password')
  }

  return (
    <div className={inputContainer}>
      <label htmlFor={props.name}>{props.name}</label>
      {props.showPassFunc ? 
        <><input {...props} style={props.style} id={props.name} type={type} className={input} />{type==='password' ? <FaEye onClick={showPass} className={icon}/> : <FaEyeSlash onClick={showPass} className={icon}/>}</>
      : 
      <input className={input} {...props}/>}
    </div>
  )
}

export default Input;