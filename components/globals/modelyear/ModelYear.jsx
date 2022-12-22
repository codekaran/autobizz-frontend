import React from 'react'
import {inputs,container,content,left,right} from './ModelYear.module.scss';
import Button from '../../globals/button/Button';
import Input from '../input/Input';
const ModelYear = () => {
  return (
    <div className={container}>
    <h6>Model Year</h6>
    <div className={content}>
        <div className={left}>
        <Button theme='light' fontSize='10px' margin='0px 0px 2px 0px' width='max-content'>2019-2022</Button>
        <Button theme='light' fontSize='10px' margin='0px 0px 2px 0px' width='max-content'>2017-2019</Button>
        <Button theme='light' fontSize='10px' margin='0px 0px 2px 0px' width='max-content'>2012-2017</Button>
        <Button theme='light' fontSize='10px' margin='0px 0px 2px 0px' width='max-content'>2007-2012</Button>
        </div>
        <div className={right}>
            <div>SLIDER</div>
            <div className={inputs}>
                <Input style={{marginRight:'5px'}} type='number' placeholder='Min'></Input> - <Input style={{marginLeft:'5px'}} type='number' placeholder='Max'></Input>
            </div>
            <Button theme='light' fontSize='10px' width='max-content'>Apply</Button>
        </div>
    </div>
    </div>
  )
}

export default ModelYear;