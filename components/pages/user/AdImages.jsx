import Loader from "../../globals/skeletons/loader";
import Image from "next/image";
import { useState } from "react";
import styles from "./AdImages.module.scss";

const AdImages = (props) => {
  const [content, setContent] = useState(props.images);

  const handleImageLoad = (index) => (event) => {
    let arr = content;
    arr[index].loaded = true;
    setContent(arr);
  };

  return (
    <ul className={styles.carList}>
      {content.map((image, i) => (
        <li key={i} className={styles.carImage}>
          {!image.loaded && <Loader></Loader>}
          <Image
            src={image.url}
            width={120}
            height={100}
            onLoad={handleImageLoad(i)}
          ></Image>
        </li>
      ))}
    </ul>
  );
};

export default AdImages;
[{ url: "", loaded: "" }, {}];
