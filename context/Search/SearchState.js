import React, { useReducer } from "react";
import SearchContext from "./SearchContext";
import SearchReducer from "./SearchReducer";
import { SET_SEARCH_STATE, SET_SEARCH_RESULTS } from "../types";
import axios from "/axios/index.js";
import setAuthToken from "../../utils/setAuthToken";

const SearchState = (props) => {
  const initialState = {
    results: [],
    make: null,
    model: null,
    min_mileage: 0,
    max_mileage: 1000000,
    // min_distance: 0,
    // max_distance: 1000000,
    error: null,
  };

  //reducer declaration
  const [state, dispatch] = useReducer(SearchReducer, initialState);
  const {
    results,
    make,
    model,
    minDistance = 0,
    maxDistance,
    minPrice = 0,
    maxPrice,
    error,
  } = state;

  //setSearchState
  const setSearchState = (formData) => {
    // const { mileage } = formData;
    // if (mileage === "0-30,000") {
    //   formData.minDistance = 0;
    //   formData.maxDistance = 30000;
    // } else if (mileage === "30,000-60,000") {
    //   formData.minDistance = 30000;
    //   formData.maxDistance = 60000;
    // } else if (mileage === "60,000-90,000") {
    //   formData.minDistance = 60000;
    //   formData.maxDistance = 90000;
    // } else if (mileage === "90,000+") {
    //   formData.minDistance = 90000;
    //   formData.maxDistance = 100000;
    // }
    dispatch({ type: SET_SEARCH_STATE, payload: formData });
  };

  //Update results based on formData
  const updateResults = async (formData) => {
    Object.keys(formData).forEach((key) => {
      if (formData[key] === null) {
        delete formData[key];
      }
    });
    try {
      const res = await axios.post(`seller-api/ads/query`, formData, {
        auth: {
          username: "karan",
          password: 123,
        },
      });
      dispatch({
        type: SET_SEARCH_RESULTS,
        payload: res.data.msg,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        setSearchState,
        updateResults,
        results,
        make,
        model,
        minDistance,
        maxDistance,
        minPrice,
        maxPrice,
        error,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
export default SearchState;
