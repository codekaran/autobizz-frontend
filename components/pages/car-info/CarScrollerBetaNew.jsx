import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from './CarScrollerBetaNew.module.scss';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
function CarScrollerBetaNew(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(0);
  const images = [{image_number:0},{image_number:1},{image_number:2},{image_number:3},{image_number:4},{image_number:5},{image_number:6},{image_number:7},{image_number:8}
    ,{image_number:9},{image_number:10},{image_number:11},{image_number:12},{image_number:13}]
  useEffect(() => {
    document.querySelector('#slider').scroll(thumbsSwiper*document.querySelector('#slider').clientWidth,0);
   
    document.querySelector('#thumbs').scroll((thumbsSwiper-1)*document.querySelector('#thumbSlide').clientWidth,0)
  }, [thumbsSwiper])
  
  return (
    <div className={styles.scrollerContainer}>
      <div className={styles.leftButton} onClick={()=> {
        if(thumbsSwiper===0)return
        setThumbsSwiper(thumbsSwiper-1);
      }}><AiOutlineLeft/></div>
      <div className={styles.rightButton} onClick={()=> {
        if(thumbsSwiper===props.images.length-1)return
        setThumbsSwiper(thumbsSwiper+1);
      }}><AiOutlineRight/></div>
      <div className={styles.slides} id={'slider'}>
          {props.images.map(image=>
          <div className={styles.slide} key={image.image_number}>
            <div className={styles.img}>
            <Image src={image.url} alt="" layout="fill"/>
            </div>
            {/* <p>{image.image_number}</p> */}
          </div>
          )}
      </div>
      <div className={styles.thumbs} id={'thumbs'}>
          {props.images.map(image=>
          <a className={`${styles.slide} ${thumbsSwiper===image.image_number && styles.active}`} key={image.image_number} id={'thumbSlide'} onClick={()=>setThumbsSwiper(image.image_number)}>
            <div className={styles.img}>
            <Image src={image.url} alt="" layout="fill" objectFit="cover"/>
            </div>
            {/* <p>{image.image_number}</p> */}
          </a>
          )}
      </div>
    </div>
  )
}

export default CarScrollerBetaNew