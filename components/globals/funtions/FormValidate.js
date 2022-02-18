const formValidate = (form) => {
  for (const key in form) {
    if (form[key] === "") {
      return 0;
    }
  }
  if (!/^\d{10}$/.test(form["phone"])) {
    return 0;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form["email"])) {
    return 0;
  }
  return 1;
};

export default formValidate;
