type ScreenSizeChangedPayload = "toMobile" | "toDesktop";

interface ScreenSizeChangedAction {
  type: "SCREEN_SIZE_CHANGED";
  payload: ScreenSizeChangedPayload;
}

export type ScreenSizeChangedGen = (
  payload: ScreenSizeChangedPayload
) => ScreenSizeChangedAction;

interface ChangeThemeAction {
  type: "CHANGE_THEME";
  payload: null | undefined;
}

export type ChangeThemeGen = () => ChangeThemeAction;

type ShowStickyNavPayload = boolean;

interface ShowStickyNavAction {
  type: "SHOW_STICKY_NAV";
  payload: ShowStickyNavPayload;
}

export type ShowStickyNavGen = (payload: ShowStickyNavPayload) => ShowStickyNavAction;

export type MainAction =
  | ScreenSizeChangedAction
  | ChangeThemeAction
  | ShowStickyNavAction;
