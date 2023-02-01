import React, { useReducer } from "react";
import ProfilePageReducer from "./ProfilePageReducer";
import ProfilePageContext from "./ProfilePageContext";
import {
  TOGGLE_EMAIL_EDITING,
  TOGGLE_PASSWORD_EDITING,
  TOGGLE_NAME_EDITING,
  TOGGLE_MOBILE_EDITING,
  TOGGLE_ADDRESS_EDITING,
  UPDATE_FALIURE,
  CLOSE_EDITING,
  LOADING_TRUE,
  LOADING_FALSE,
  CLEAR_ERRORS,
} from "../types";
import axios from "/axios/index.js";
import setAuthToken from "../../utils/setAuthToken";

const ProfilePageState = (props) => {
  const initialState = {
    editEmail: false,
    editPassword: false,
    editName: false,
    editing: false,
    loading: false,
    editMobile: false,
    editAddress: false,
    error: null,
  };

  const [state, dispatch] = useReducer(ProfilePageReducer, initialState);

  //toggle email editing
  const showEditing = (field) => {
    switch (field) {
      case "email":
        dispatch({ type: TOGGLE_EMAIL_EDITING, payload: true });
        break;
      case "password":
        dispatch({ type: TOGGLE_PASSWORD_EDITING, payload: true });
        break;
      case "name":
        dispatch({ type: TOGGLE_NAME_EDITING, payload: true });
        break;
      case "mobile":
        dispatch({ type: TOGGLE_MOBILE_EDITING, payload: true });
        break;
      case "address":
        dispatch({ type: TOGGLE_ADDRESS_EDITING, payload: true });
        break;
      default:
        break;
    }
  };
  //Close editing
  const hideEditing = () => {
    dispatch({ type: CLOSE_EDITING });
  };
  //Update Name
  const updateDetails = async (formData) => {
    dispatch({ type: LOADING_TRUE });
    try {
      setAuthToken(localStorage.getItem("token"));
      const res = await axios.put(`/seller-api/sellers/updateUser`, formData, {
        auth: {
          username: "karan",
          password: 123,
        },
      });
      dispatch({ type: LOADING_FALSE });
      return true;
    } catch (error) {
      dispatch({
        type: UPDATE_FALIURE,
        payload: error.response.data.errMsg,
      });
      setTimeout(() => {
        dispatch({ type: CLEAR_ERRORS });
      }, 2000);
      return false;
    }
  };

  return (
    <ProfilePageContext.Provider
      value={{
        editing: state.editing,
        showEditing,
        hideEditing,
        updateDetails,
        editEmail: state.editEmail,
        editPassword: state.editPassword,
        editName: state.editName,
        editMobile: state.editMobile,
        editAddress: state.editAddress,
        loading: state.loading,
        error: state.error,
      }}
    >
      {props.children}
    </ProfilePageContext.Provider>
  );
};
export default ProfilePageState;
