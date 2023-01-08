import React, { useEffect, useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { v1 as uuid } from "uuid";

import { CREATE_ALERT, DELETE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = { alerts: [] };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Create alert from context

  //Create new Alert from component
  const createAlert = (message, time = 5) => {
    const id = uuid();
    dispatch({ type: CREATE_ALERT, payload: { id, message } });
    setTimeout(() => {
      dispatch({ type: DELETE_ALERT, payload: { id } });
    }, time * 1000);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        createAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
