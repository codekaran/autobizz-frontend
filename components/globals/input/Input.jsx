import React, { useState,useEffect } from 'react'
import {input} from './Input.module.scss';

const Input = (props) => {

  return (
        <input className={input} {...props}/>
  )
}

export default Input;