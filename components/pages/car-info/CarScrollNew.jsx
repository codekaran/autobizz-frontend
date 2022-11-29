import { useEffect, useRef, useState } from "react";
import styles from "./CarScrollNew.module.scss";
import ScrollCards from "./ScrollCards";
import Image from "next/image";

const CarScrollNew = (props) => {
  console.log(props);
  useEffect(() => {
    setState({ ...state, pictures: props.images });
    console.log(state);
  }, []);
  const [state, setState] = useState({
    pictures: [],
    closePopUp: true,
    carDetails: {},
    image_number: 0,
    translate: 100,
    scrollCardRef: "",
  });
  let popUpImageSection = useRef(null);
  let carLargeImagesContainer = useRef(null);
  let scrollIndicator = "";

  const handlePopUp = (image_num) => {
    let closePopUpStatus = state.closePopUp ? false : true;
    window.scrollTo(0, 0);
    // document.body.style.overflow = "hidden";
    setState({ ...state, closePopUp: closePopUpStatus });
    handlePopUpScroll(image_num);
  };

  const handlePopUpScroll = (image_num) => {
    console.log(image_num);
    setTimeout(() => {
      console.log(popUpImageSection.current.scrollHeight);
      console.log(popUpImageSection.current.clientHeight);
      let number_of_cars =
        popUpImageSection.current.scrollHeight /
        popUpImageSection.current.clientHeight;
      let val = popUpImageSection.current.clientHeight * image_num;
      if (window.innerWidth < 769) {
        val /= 2;
      }

      popUpImageSection.current.scroll({
        top: val,
        left: 0,
        behavior: "smooth",
      });
      console.log(number_of_cars);
    }, 10);
  };

  const closePopUp = (e) => {
    console.log(e);
    e.stopPropagation();
    // let closePopUpStatus = state.closePopUp ? false : true;
    setState({ ...state, closePopUp: false });
    document.body.style.overflow = "";
    // this.setState(this.state);
    console.log(state);
  };
  const handleScrollIndicator = (image) => {
    // let client = this.scrollIndicator.clientHeight;
    // when car scrolls up
    // let translate
    let diff = Math.abs(image - state.image_number);
    let translateValue = state.translate;
    if (image < state.image_number) {
      translateValue += diff * 100;
    } else if (image > state.image_number) {
      translateValue -= diff * 100;
    }
    console.log("thumbnail", image);
    setState({ ...state, image_number: image, translate: translateValue });
    // this.state.image_number = image;
    // this.setState(this.state);
  };
  const handleScrollImageOnClick = (image_num) => {
    let largeImagesContainerHeight = carLargeImagesContainer.clientHeight;
    let scrollCardRef = state.scrollCardRef.current;
    let scrollVal = image_num * scrollCardRef.clientHeight;
    scrollCardRef.scroll(0, scrollVal);
  };

  const getScrollCardRef = (scrollCardRef) => {
    console.log("akjsdfajsdgfasdfa", scrollCardRef);
    // this.state.scrollCardRef = scrollCardRef;
    setState({ ...state, scrollCardRef: scrollCardRef });
    // this.setState(this.state);
  };

  return (
    <>
      <div className={styles.car_image_scroller}>
        <div
          ref={carLargeImagesContainer}
          className={styles.scroll_card_container}
        >
          <ScrollCards
            getScrollCardRef={getScrollCardRef}
            popUp={handlePopUp}
            carDetails={state.pictures}
            scrollIndicator={handleScrollIndicator}
          ></ScrollCards>
        </div>
        <div
          ref={(el) => {
            scrollIndicator = el;
          }}
          className={styles.car_image_indicator}
        >
          <ul
            style={{
              transform: `translateX(${state.translate}px)`,
            }}
          >
            {state.pictures.map((image) => (
              <li
                onClick={() => handleScrollImageOnClick(image.image_number)}
                key={image.image_number}
                id={
                  state.image_number === image.image_number ? styles.active : ""
                }
                className={styles.car_image_indicator_li}
                // style={{ backgroundImage: `url(${image.url})` }}
              >
                <Image
                  src={image.url}
                  // layout="fill"
                  width={350}
                  height={300}
                  objectFit="cover"
                  // priority
                  //   onLoadingComplete={handleImageLoad}
                ></Image>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div
        onClick={closePopUp}
        className={`${styles.car_image_pop_up} ${
          state.closePopUp ? styles.close_image_pop_up : ""
        }`}
        ref={popUpImageSection}
      >
        <div onClick={closePopUp} className={styles.cross_car_pop_up}></div>
        {state.pictures.map((picture, index) => (
          <div
            key={index}
            // style={{ backgroundImage: `url(${picture.url})` }}
            className={styles.pop_up_image}
          >
            <Image
              src={picture.url}
              //   alt={make + " " + model}
              layout="fill"
              //   width={350}
              //   height={300}
              objectFit="contain"
              // priority
              //   onLoadingComplete={handleImageLoad}
            ></Image>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default CarScrollNew;
