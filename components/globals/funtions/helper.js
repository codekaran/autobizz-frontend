// function sends the user if stored in local storage or context
export const getSession = (ctx) => {
  if (ctx.isLoggedIn.status) {
    return ctx.isLoggedIn;
  } else if (window.localStorage.getItem("userData")) {
    let userSession = JSON.parse(window.localStorage.getItem("userData"));
    return userSession;
  }
  return undefined;
};
