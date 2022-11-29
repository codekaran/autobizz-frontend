import { useEffect, useRef, useState } from "react";
import styles from "./ScrollCards.module.scss";
import Image from "next/image";

const ScrollCards = (props) => {
  let imgElement = useRef([]);
  let scrollVal = 0;
  const scrollWindow = useRef(null);
  const [imageNumber, setImageNumber] = useState(0);
  const [state, setState] = useState({
    carImages: [],
    scrollVal: 0,
    display: "block",
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    props.getScrollCardRef(scrollWindow);
    console.log(scrollWindow);
    scrollWindow.current.addEventListener("scroll", hideAnimation);
    setState({ ...state, carImages: props.carDetails });
    return () => {};
  }, [imageNumber]);
  const handleImageLoad = () => {
    setLoaded(true);
  };
  const hideAnimation = () => {
    if (scrollWindow.current.scrollTop < 51) {
      setState({ ...state, display: "block" });
    } else {
      setState({ ...state, display: "none" });
    }
  };

  const handleScroll = () => {
    // getting the value of px between

    let val =
      (scrollWindow.current.scrollHeight - scrollWindow.current.scrollTop) /
      (1 * scrollWindow.current.clientHeight);
    let final_val = props.carDetails.length - Math.round(val);
    console.log("final", final_val);
    if (imageNumber != final_val) {
      console.log("setting state");
      props.scrollIndicator(final_val);
      setImageNumber(final_val);
      console.log(state);
    }
  };

  return (
    <div
      className={styles.scroll_card}
      ref={scrollWindow}
      onScroll={handleScroll}
    >
      <div
        style={{ display: state.display }}
        className={styles.arrow_scroll_anime}
      ></div>
      {props.carDetails.map((image) => (
        <div
          // onClick={() => props.popUp(image.image_number)}
          key={image.image_number}
          ref={(el) => (imgElement.current = [imgElement.current, el])}
          id={imageNumber === image.image_number ? styles.active : ""}
          className={styles.scroll_image}
        >
          <Image
            src={image.url}
            //   alt={make + " " + model}
            layout="fill"
            // width={350}
            // height={300}
            objectFit="cover"
            priority
            onLoadingComplete={handleImageLoad}
          ></Image>
          {!loaded && (
            <div className={styles.loader}>
              <div className={styles.shimmer}></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ScrollCards;
