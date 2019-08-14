import { ScreenSizeChangedGen, ChangeThemeGen, ShowStickyNavGen } from "./types";

export const screenSizeChanged: ScreenSizeChangedGen = payload => ({
  type: "SCREEN_SIZE_CHANGED",
  payload
});

export const changeTheme: ChangeThemeGen = () => ({
  type: "CHANGE_THEME",
  payload: null
});

export const showStickyNav: ShowStickyNavGen = payload => ({
  type: "SHOW_STICKY_NAV",
  payload
});
