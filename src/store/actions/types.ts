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

export type MainAction =
  | ScreenSizeChangedAction
  | ChangeThemeAction
  | ShowStickyNavAction;
