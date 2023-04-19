import React,{useState} from 'react'
import styles from './SelectableWithImage.module.scss'
import colors from '../../../variables/colors'
import Button from '../button/Button'
import Image from 'next/image'
function SelectableWithImage(props) {
const [selected , setSelected] = useState(props.value);
  return (
    <div className={styles.container}>
        <label htmlFor={props.name}>{props.name}</label>
        <div className={styles.selectables}>
           {props.options.map(option=> 
           <Button 
           backgroundColor={selected === option.value ? colors.buttonHoverColor : '#fff'} 
           theme='light'
           onClick={(e)=>{props.onClick(e);setSelected(option.value);}}
           value={option.value}
           type={'button'}
           padding='15px 20px'
           >
            <Image src={option.img} alt={option.value}/>
           </Button>)}
        </div>
    </div>
  )
}

export default SelectableWithImage