import React, { useState } from 'react'
import {inputs,container,content_open,content_close,left,right,filterName} from './ModelYear.module.scss';
import Button from '../button/Button';
import Input from '../input/Input';
import Link from 'next/link';
import {AiOutlineDown} from 'react-icons/ai';

const ModelYear = () => {

  const [toggle,setToggle]=useState(false);

  const handleToggle= ()=>{
    setToggle(!toggle);
  }

  return (
    <div className={container}>
    <div className={filterName} onClick={()=>{handleToggle()}}>
      <h6>Model Year</h6>
      <AiOutlineDown/>
    </div>
    <div className={toggle ? content_open : content_close}>
        <div className={left}>
        <Link href="#!">2019-2022</Link>
        <Link href="#!">2017-2019</Link>
        <Link href="#!">2012-2017</Link>
        <Link href="#!">2007-2012</Link>
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

export default ModelYear;