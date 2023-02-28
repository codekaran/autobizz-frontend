import { SET_SEARCH_STATE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_SEARCH_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
