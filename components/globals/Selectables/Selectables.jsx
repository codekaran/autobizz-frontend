import React, { useState } from 'react'
import Button from '../button/Button'
import styles from './Selectables.module.scss'
import colors from '../../../variables/colors'
function Selectables(props) {
const [selected , setSelected] = useState(props.value);
  return (
    <div className={styles.container}>
        <label htmlFor={props.name}>{props.name}</label>
        <div className={styles.selectables} {...props}>
           {props.options.map(option=> 
           <Button 
           backgroundColor={selected === option ? colors.buttonHoverColor : '#fff'} 
           theme='light'
           onClick={()=>setSelected(option)}
           value={option}
           type={'button'}
           padding='15px 20px'
           >
            {option}
           </Button>)}
        </div>
    </div>
  )
}

export default Selectables