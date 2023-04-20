import { SET_SEARCH_STATE, SET_SEARCH_RESULTS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_SEARCH_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};
