import { MainReducer } from "./types";
import { MainAction } from "../actions/types";

const initialState: MainReducer = {
  isDesktop: false,
  themeIndex: 0,
  stickyNavVisible: false
};

const mainReducer = (state = initialState, action: MainAction) => {
  switch (action.type) {
    case "SCREEN_SIZE_CHANGED":
      return {
        ...state,
        isDesktop: action.payload === "toDesktop"
      };
    case "CHANGE_THEME":
      return {
        ...state,
        themeIndex: state.themeIndex < 5 ? state.themeIndex + 1 : 0
      };
    case "SHOW_STICKY_NAV":
      return {
        ...state,
        stickyNavVisible: action.payload
      };
    default:
      return state;
  }
};

export default mainReducer;
