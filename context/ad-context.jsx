import React, { useState } from "react";

const AdContext = React.createContext({
  data: {},
  setAdForm: () => {},
});
let data = {
  make: "",
  model: "",
  firstRegistration: "",
  power: 0,
  mileage: 0,
  fuel: "",
  gearbox: "",
};

export const AdContexProvider = (props) => {
  const setAdForm = (value) => {
    console.log("in ad context setting ", value);
    data = { ...data, ...value };
    console.log(data);
  };

  return (
    <AdContext.Provider value={{ data: data, setAdForm: setAdForm }}>
      {props.children}
    </AdContext.Provider>
  );
};

export default AdContext;
