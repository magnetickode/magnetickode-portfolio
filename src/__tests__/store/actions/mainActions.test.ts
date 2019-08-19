import {
  screenSizeChanged,
  changeTheme,
  showStickyNav,
  changeScroll,
  changeHashRoute
} from "../../../store/actions/mainActions";
import {
  ScreenSizeChangedAction,
  ChangeThemeAction,
  ShowStickyNavAction,
  ChangeScrolledAction,
  ChangeHashRouteAction
} from "../../../store/actions/types";

it("should create an action to notify when screen size changes to mobile or desktop", () => {
  const mockPayload = "toDesktop";

  const expectedAction: ScreenSizeChangedAction = {
    type: "SCREEN_SIZE_CHANGED",
    payload: "toDesktop"
  };

  const returnedAction: ScreenSizeChangedAction = screenSizeChanged(mockPayload);
  expect(returnedAction).toEqual(expectedAction);
});

it("should create an action to change theme index", () => {
  const expectedAction: ChangeThemeAction = {
    type: "CHANGE_THEME",
    payload: null
  };

  const returnedAction: ChangeThemeAction = changeTheme();
  expect(returnedAction).toEqual(expectedAction);
});

it("should create an action to notify when to show sticky nav", () => {
  const expectedAction: ShowStickyNavAction = {
    type: "SHOW_STICKY_NAV",
    payload: true
  };

  const returnedAction: ShowStickyNavAction = showStickyNav(true);
  expect(returnedAction).toEqual(expectedAction);
});

it("should create an action to notify that scroll position is not 0", () => {
  const expectedAction: ChangeScrolledAction = {
    type: "CHANGE_SCROLLED",
    payload: true
  };

  const returnedAction: ChangeScrolledAction = changeScroll(true);
  expect(returnedAction).toEqual(expectedAction);
});

it("should create an action to change hashRoute", () => {
  const expectedAction: ChangeHashRouteAction = {
    type: "CHANGE_HASH_ROUTE",
    payload: "#about"
  };

  const returnedAction: ChangeHashRouteAction = changeHashRoute("#about");
  expect(returnedAction).toEqual(expectedAction);
});
