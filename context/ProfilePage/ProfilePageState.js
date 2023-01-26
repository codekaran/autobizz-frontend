import React, { useReducer } from "react";
import ProfilePageReducer from "./ProfilePageReducer";
import ProfilePageContext from "./ProfilePageContext";
import { TOGGLE_EMAIL_EDITING, CLOSE_EDITING } from "../types";

const ProfilePageState = (props) => {
  const initialState = { editEmail: false, editing: false };

  const [state, dispatch] = useReducer(ProfilePageReducer, initialState);

  //toggle editing
  const setShowEmailModal = (val) => {
    dispatch({ type: TOGGLE_EMAIL_EDITING, payload: val });
  };
  //Close editing
  const hideEditing = () => {
    dispatch({ type: CLOSE_EDITING });
  };

  return (
    <ProfilePageContext.Provider
      value={{
        editing: state.editing,
        setShowEmailModal,
        hideEditing,
        editEmail: state.editEmail,
      }}
    >
      {props.children}
    </ProfilePageContext.Provider>
  );
};
export default ProfilePageState;
