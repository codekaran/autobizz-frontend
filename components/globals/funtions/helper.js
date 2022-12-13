// function sends the user if stored in local storage or context
export const getSession = (ctx) => {
  console.log("in helper");
  if (ctx.isLoggedIn.status) {
    console.log("setting from context");
    return ctx.isLoggedIn;
  } else if (window.localStorage.getItem("userData")) {
    console.log("setting from local");
    let userSession = JSON.parse(window.localStorage.getItem("userData"));
    return userSession;
  }
  return undefined;
};
