import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
  REGISTER_FORM_UPDATE,
  REGISTER_FORM_CLEAR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      window.localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      window.localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      window.localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.data,
        token: action.payload.token,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case REGISTER_FORM_UPDATE:
      return {
        ...state,
        registerFormData: {
          ...state.registerFormData,
          ...action.payload,
        },
      };
    case REGISTER_FORM_CLEAR:
      return {
        registerFormData: {
          sellerType: "",
          RegistrationType: "",
          email: "",
          password: "",
          confirmPass: "",
          companyName: "",
          fname: "",
          lname: "",
          phone: "",
          street: "",
          country: "",
          zipCode: "",
          city: "",
        },
      };
    default:
      return state;
  }
};
