import {
  ScreenSizeChangedGen,
  ChangeThemeGen,
  ShowStickyNavGen,
  ChangeScrollGen,
  ChangeHashRouteGen
} from "./types";

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

export const changeScroll: ChangeScrollGen = payload => ({
  type: "CHANGE_SCROLLED",
  payload
});

export const changeHashRoute: ChangeHashRouteGen = payload => ({
  type: "CHANGE_HASH_ROUTE",
  payload
});
