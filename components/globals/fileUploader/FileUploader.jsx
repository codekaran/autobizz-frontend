import React, { useRef } from 'react'
import styles from './FileUploader.module.scss';
import {AiOutlinePlusCircle} from 'react-icons/ai'
function FileUploader(props) {

    // const wrapperRef = useRef(wrapperRef)
    // const onDragEnter =()=>{
    //     wrapperRef.current.classList.add('dragover')
    // }

    // const onDragLeave =()=>{
    //     wrapperRef.current.classList.remove('dragover')
    // }

  return (
    <div className={styles.container}>
        <h3>{props.name}</h3>
        <div className={styles.body} >
            <p className={styles.icon}><AiOutlinePlusCircle></AiOutlinePlusCircle></p>
            <p className={styles.title}>Click to upload files</p>
            <input 
            type="file"
            name="files"
            multiple
            accept="image/jpeg, image/png"
            onChange={props.onChange}
            />
        </div>
    </div>
  )
}

export default FileUploader