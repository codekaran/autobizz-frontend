import { CREATE_ALERT, DELETE_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };
    case DELETE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((alert) => {
          return alert.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};
