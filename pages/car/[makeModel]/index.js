import React from "react";
import CarInfo from "../../../components/pages/car-info/CarInfo";
import { getCars } from "../../apiCalls";
import axios from "/axios/index.js";
const index = (props) => {
  return (
    <div>
      <CarInfo data={props.content} carsArray={props.carArray} />
    </div>
  );
};

export async function getStaticPaths() {
  try {
    let cars = await axios.get(`/seller-api/ads/ads`, {
      auth: {
        username: "karan",
        password: 123,
      },
    });
    let pathsData = [];
    for (let car of cars.data) {
      pathsData.push({
        params: {
          makeModel: car.make + "-" + car.model + "-" + car.id,
        },
      });
    }
    return {
      fallback: false,
      paths: pathsData,
    };
  } catch (err) {}
}

export async function getStaticProps(context) {
  let adId = context.params.makeModel.split("-").slice(-1)[0];
  let car = await axios.get(`/seller-api/ads/ad/` + adId, {
    auth: {
      username: "karan",
      password: 123,
    },
  });
  let result = await getCars();

  let tempImage = [];
  let i = 0;
  for (let image of car.data.images) {
    tempImage.push({ image_number: i, url: image });
    i += 1;
  }
  car.data.images = tempImage;
  return {
    props: {
      content: car.data,
      carArray: result.data,
    },
  };
}

export default index;
