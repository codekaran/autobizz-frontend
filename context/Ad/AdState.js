import React, { useReducer } from "react";
import AdContext from "./AdContext";
import AdReducer from "./AdReducer";
import { v1 as uuid } from "uuid";
import axios from "axios";
import { server } from "../../variables/server";
import { GET_USERADS_SUCCESS, GET_USERADS_FALIURE } from "../types";

const AdState = (props) => {
  const initialState = {
    userAds: [],
    loadingUserAds: true,
    adFormData: {
      make: "",
      model: "",
      firstRegistration: "",
      power: 0,
      mileage: 0,
      fuel: "",
      gearbox: "",
      step1Completed: false,
      step2Completed: false,
    },
    error: null,
  };

  const [state, dispatch] = useReducer(AdReducer, initialState);

  //Get ads of logged in user
  const getUserAds = async () => {
    try {
      const response = await axios.get(`/seller-api/ads/userAds`, {
        auth: {
          username: "karan",
          password: 123,
        },
      });
      response = response.data;
      let imagesWithLoadStatus = [];
      for (let ad of response) {
        imagesWithLoadStatus = [];

        for (let image of ad.images)
          imagesWithLoadStatus.push({ url: image, loaded: false });
        ad.images = imagesWithLoadStatus;
        ad.editModeOn = 0;
      }
      console.log(response);
      dispatch({ type: GET_USERADS_SUCCESS, payload: response });
    } catch (error) {
      dispatch({
        type: GET_USERADS_FALIURE,
        payload: error.response.data,
      });
    }
  };
  //Set ad form data
  const setAdForm = (value) => {
    dispatch({ type: SET_AD_FORM_DATA, payload: value });
  };
  //Post ad

  return (
    <AdContext.Provider
      value={{
        userAds: state.userAds,
        loadingUserAds: state.loadingUserAds,
        error: state.error,
        adFormData: state.adFormData,
        setAdForm,
        getUserAds,
      }}
    >
      {props.children}
    </AdContext.Provider>
  );
};
export default AdState;
