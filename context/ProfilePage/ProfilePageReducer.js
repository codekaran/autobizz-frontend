import {
  TOGGLE_EMAIL_EDITING,
  TOGGLE_PASSWORD_EDITING,
  TOGGLE_NAME_EDITING,
  TOGGLE_ADDRESS_EDITING,
  CLOSE_EDITING,
  LOADING_TRUE,
  LOADING_FALSE,
  UPDATE_FALIURE,
  CLEAR_ERRORS,
  TOGGLE_MOBILE_EDITING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_EMAIL_EDITING:
      return {
        ...state,
        editing: action.payload,
        editEmail: action.payload,
      };
    case TOGGLE_PASSWORD_EDITING:
      return {
        ...state,
        editing: action.payload,
        editPassword: action.payload,
      };
    case TOGGLE_NAME_EDITING:
      return {
        ...state,
        editing: action.payload,
        editName: action.payload,
      };
    case TOGGLE_MOBILE_EDITING:
      return {
        ...state,
        editing: true,
        editMobile: action.payload,
      };
    case TOGGLE_ADDRESS_EDITING:
      return {
        ...state,
        editing: true,
        editAddress: true,
      };
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case UPDATE_FALIURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLOSE_EDITING:
      return {
        ...state,
        editing: false,
        editEmail: false,
        editPassword: false,
        editName: false,
        editMobile: false,
        editAddress: false,
      };

    default:
      return state;
  }
};
