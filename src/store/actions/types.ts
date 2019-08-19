type ScreenSizeChangedPayload = "toMobile" | "toDesktop";

export interface ScreenSizeChangedAction {
  type: "SCREEN_SIZE_CHANGED";
  payload: ScreenSizeChangedPayload;
}

export type ScreenSizeChangedGen = (
  payload: ScreenSizeChangedPayload
) => ScreenSizeChangedAction;

export interface ChangeThemeAction {
  type: "CHANGE_THEME";
  payload: null | undefined;
}

export type ChangeThemeGen = () => ChangeThemeAction;

type ShowStickyNavPayload = boolean;

export interface ShowStickyNavAction {
  type: "SHOW_STICKY_NAV";
  payload: ShowStickyNavPayload;
}

export type ShowStickyNavGen = (payload: ShowStickyNavPayload) => ShowStickyNavAction;

type ChangeScrolledPayload = boolean;

export interface ChangeScrolledAction {
  type: "CHANGE_SCROLLED";
  payload: ChangeScrolledPayload;
}

export type ChangeScrollGen = (payload: ChangeScrolledPayload) => ChangeScrolledAction;

export type ChangeHashRoutePayload =
  | "#home"
  | "#skills"
  | "#portfolio"
  | "#about"
  | "#contact";

export interface ChangeHashRouteAction {
  type: "CHANGE_HASH_ROUTE";
  payload: ChangeHashRoutePayload;
}

export type ChangeHashRouteGen = (
  payload: ChangeHashRoutePayload
) => ChangeHashRouteAction;

export type MainAction =
  | ScreenSizeChangedAction
  | ChangeThemeAction
  | ShowStickyNavAction
  | ChangeScrolledAction
  | ChangeHashRouteAction;
