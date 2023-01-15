import {
  GET_USERADS_FALIURE,
  GET_USERADS_SUCCESS,
  SET_AD_FORM_DATA,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USERADS_SUCCESS:
      return {
        ...state,
        userAds: action.payload,
        loadingUserAds: false,
      };
    case GET_USERADS_FALIURE:
      return {
        ...state,
        loadingUserAds: false,
        error: action.payload,
      };
    case SET_AD_FORM_DATA:
      return {
        ...state,
        adFormData: { ...state.adFormData, ...action.payload },
      };
    default:
      return state;
  }
};
