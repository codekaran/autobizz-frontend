import { TOGGLE_EMAIL_EDITING, CLOSE_EDITING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_EMAIL_EDITING:
      return {
        ...state,
        editing: action.payload,
        editEmail: action.payload,
      };
    case CLOSE_EDITING:
      return {
        ...state,
        editing: false,
        editEmail: false,
      };

    default:
      return state;
  }
};
