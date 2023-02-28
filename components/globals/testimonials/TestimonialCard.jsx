import React from 'react'
import {container,name,details,profileImage,quote,stars,fullname,title} from './TestimonialCard.module.scss';
import { FaQuoteRight,  } from 'react-icons/fa';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import Image from 'next/image';
function TestimonialCard(props) {
  return (
    <div className={container}>
        <div className={quote}><FaQuoteRight/></div>
        <p>{props.description}</p>
        <div className={details}>
            <div className={name}>
            <p><span className={fullname}>{props.fullname+' '}</span> | <span className={title}>{' '+props.title}</span></p>
            <div className={stars}>
                {props.rating>0 ? <AiFillStar/> : <AiOutlineStar/>}
                {props.rating>1 ? <AiFillStar/> : <AiOutlineStar/>}
                {props.rating>2 ? <AiFillStar/> : <AiOutlineStar/>}
                {props.rating>3 ? <AiFillStar/> : <AiOutlineStar/>}
                {props.rating>4 ? <AiFillStar/> : <AiOutlineStar/>}
            </div>
            </div>
            <div className={profileImage}>
                <img src={props.image}></img>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard