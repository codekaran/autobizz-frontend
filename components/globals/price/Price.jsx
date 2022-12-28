import React,{useState} from 'react'
import {inputs,container,content_open,content_close,left,right,filterName} from './Price.module.scss';
import Button from '../button/Button';
import Input from '../input/Input';
import Link from 'next/link';
import { AiOutlineDown } from 'react-icons/ai';

const Price = () => {
  const [toggle,setToggle]=useState(false);

  const handleToggle= ()=>{
    setToggle(!toggle);
  }
  return (
    <div className={container}>
    <div className={filterName} onClick={()=>{handleToggle()}}>
    <h6>Price</h6>
    <AiOutlineDown/>
    </div>
    <div className={toggle ? content_open : content_close}>
        <div className={left}>
        <Link href="#!">Cars under €2000</Link>
        <Link href="#!">Cars from €2000 - €4000</Link>
        <Link href="#!">Cars from €4000 - €6000</Link>
        <Link href="#!">Cars above €6000</Link>
        </div>  
        <div className={right}>
            <div>SLIDER</div>
            <div className={inputs}>
                <Input style={{marginRight:'5px'}} type='number' placeholder='Min'></Input> - <Input style={{marginLeft:'5px'}} type='number' placeholder='Max'></Input>
            </div>
            {/* <Button theme='light' margin='0px 0px 5px auto' fontSize='10px' width='max-content'>Apply</Button> */}
        </div>
    </div>
    </div>
  )
}

export default Price;