type ScreenSizeChangedPayload = "toMobile" | "toDesktop";

interface ScreenSizeChanged {
  type: "SCREEN_SIZE_CHANGED";
  payload: "toMobile" | "toDesktop";
}

export type ScreenSizeChangedGen = (
  payload: ScreenSizeChangedPayload
) => ScreenSizeChanged;

interface ChangeTheme {
  type: "CHANGE_THEME";
  payload: null | undefined;
}

export type ChangeThemeGen = () => ChangeTheme;

export type MainAction = ScreenSizeChanged | ChangeTheme;
