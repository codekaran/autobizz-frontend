import React,{useContext, useState} from 'react'
import { CgInfo } from 'react-icons/cg'
import {BsHeartFill,BsFillChatLeftDotsFill,BsFillShareFill, BsEye, BsHeart} from 'react-icons/bs'
import AlertContext from '../../../context/Alert/AlertContext'
import Button from '../../globals/button/Button'
import { container,name, minorDetails,priceFairness,infoIcon,ratingIcon,sellerInfo,sellerName,sellerEmail,sellerPhone,buttonGroup,likesInfo,views } from './CarBasicInfo.module.scss'
function CarBasicInfo(props) {
  const AlertCtx = useContext(AlertContext);
  const share = () =>{
    var dummy = document.createElement('input'),
    text = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    AlertCtx.createAlert('Copied URL', 'S')
  }
  const [liked,setLiked] = useState(false);
  const toggleLiked =(liked)=>{
    setLiked(!liked)
  }
  return (
    <div className={container}>
    <div className={name}>
      <h3>
        {props.data.make +' '+ props.data.model}
      </h3>
      <h3>€ 1150{/*props.data.price*/}</h3>
      <p onClick={()=>toggleLiked(liked)}>{liked? <BsHeartFill/> : <BsHeart/>}</p>
    </div>
    <div className={minorDetails}>
        {props.data.fuel +' | '+ props.data.gearbox }
    </div>
    <div className={priceFairness}>
        <div className={ratingIcon}></div>
        <div className={ratingIcon}></div>
        <div className={ratingIcon}></div>
        <div className={ratingIcon}></div>
        <div className={ratingIcon} style={{backgroundColor:'grey'}}></div>
        <div className={infoIcon} title={'Price Fairness is good'}><CgInfo/></div>
    </div>{/* not Dynamic */}
    <hr></hr>
    <div className={sellerInfo}>
      <div className={sellerName}>
        {/* <CgProfile /> */}
        <p>John Doe</p>
      </div>
      <div className={sellerEmail}>
        {/* <MdOutlineEmail /> */}
        <p>Johndoe4543@gmail.com</p>
      </div>
      <div className={sellerPhone}>
        {/* <HiOutlineLocationMarker /> */}
        <p>+81 8976876342</p>
      </div>
    </div>
    <hr></hr>
      <div className={buttonGroup}>
      <Button icon={<BsFillChatLeftDotsFill/>}>Contact Seller</Button>
      <Button icon={<BsFillShareFill/>} onClick={share}>Share</Button>
      </div>
    <div className={likesInfo}>
      {/* Props should have likes and views */}
      <div className={views}>
        <BsEye/>
        43
      </div>
      <div className={views}>
        <BsHeart/>
        14
      </div>
    </div>
  </div>
  )
}

export default CarBasicInfo