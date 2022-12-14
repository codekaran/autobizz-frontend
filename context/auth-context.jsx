import React, { useEffect, useReducer, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = React.createContext({
  isLoggedIn: {},
  setLoggedInStatus: () => {},
});
let isLoggedIn = {
  decodedToken: {},
  status: false,
  token: "",
};

export const AuthContexProvider = (props) => {
  const setLoggedInStatus = (value) => {
    console.log("in auth context setting ", value);
    isLoggedIn = { ...isLoggedIn, ...value };
    let token = isLoggedIn.token;
    isLoggedIn = { ...isLoggedIn, decodedToken: jwt_decode(token) };
    console.log(isLoggedIn);
    window.localStorage.setItem("userData", JSON.stringify(isLoggedIn));
  };

  return (
    <AuthContext.Provider
      value={{ setLoggedInStatus, isLoggedIn}}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
