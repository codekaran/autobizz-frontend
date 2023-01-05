import React, { useEffect, useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import axios from "axios";
import { server } from "../../variables/server";
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
import { useRouter } from "next/router";
import setAuthToken from "../../utils/setAuthToken";

const AuthState = (props) => {
  const router = useRouter();

  useEffect(() => {
    loadUser();
  }, []);

  const initialState = {
    token: null,
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
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

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Load User
  const loadUser = async () => {
    localStorage.getItem("token") &&
      setAuthToken(localStorage.getItem("token"));
    try {
      const res = await axios.get(
        `${server.serverURL}/seller-api/sellers/userData`,
        {
          auth: {
            username: "karan",
            password: 123,
          },
        }
      );
      console.log("load userrr");
      console.log(res);
      dispatch({
        type: USER_LOADED,
        payload: {
          data: res.data,
          token: window.localStorage.getItem("token"),
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: AUTH_ERROR, payload: error.response.data.errMsg });
    }
  };
  //Register User
  const register = async (formData) => {
    try {
      const res = await axios.post(
        `${server.serverURL}/seller-api/sellers/register`,
        formData,
        {
          auth: {
            username: "karan",
            password: 123,
          },
        }
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.token,
      });
      dispatch({ type: REGISTER_FORM_CLEAR });
      loadUser();
      router.push("/register/success");
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errMsg,
      });
    }
  };
  //Login User
  const login = async (formData) => {
    try {
      const res = await axios.post(
        `${server.serverURL}/seller-api/sellers/login`,
        formData,
        {
          auth: {
            username: "karan",
            password: 123,
          },
        }
      );
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });
      loadUser();
      router.push("/");
    } catch (error) {
      console.log(error);
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.errMsg });
    }
  };
  //Logout
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
    router.push("/");
  };
  //Clear Errors
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
  //Register form setter{register,setRegisterForm},
  const setRegisterForm = (formData) => {
    dispatch({ type: REGISTER_FORM_UPDATE, payload: formData });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        registerFormData: state.registerFormData,
        register,
        login,
        logout,
        clearErrors,
        loadUser,
        setRegisterForm,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
