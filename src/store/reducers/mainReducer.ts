import { MainReducer } from "./types";
import { MainAction } from "../actions/types";

const initialState: MainReducer = {
  isDesktop: false,
  themeIndex: 0
};

const mainReducer = (state = initialState, { type, payload }: MainAction) => {
  switch (type) {
    case "SCREEN_SIZE_CHANGED":
      return {
        ...state,
        isDesktop: payload === "toDesktop"
      };
    case "CHANGE_THEME":
      return {
        ...state,
        themeIndex: state.themeIndex < 4 ? state.themeIndex + 1 : 0
      };
    default:
      return state;
  }
};

export default mainReducer;
