import React, { useReducer } from "react";
import AdContext from "./AdContext";
import AdReducer from "./AdReducer";
// import { v1 as uuid } from "uuid";
import axios from "axios";
import { server } from "../../variables/server";
import { GET_USERADS_SUCCESS, GET_USERADS_FALIURE } from "../types";

const AdState = (props) => {
  const initialState = { userAds: [], loadingUserAds: true, error: null };

  const [state, dispatch] = useReducer(AdReducer, initialState);

  //Get ads of logged in user
  const getUserAds = async (token) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/seller-api/ads/userAds/`,
        {
          auth: {
            username: "karan",
            password: 123,
          },
        }
      );
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

  return (
    <AdContext.Provider
      value={{
        userAds: state.userAds,
        loadingUserAds: state.loadingUserAds,
        error: state.error,
        getUserAds,
      }}
    >
      {props.children}
    </AdContext.Provider>
  );
};
export default AdState;
