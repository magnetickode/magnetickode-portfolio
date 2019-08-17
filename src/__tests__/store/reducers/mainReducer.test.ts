import mainReducer from "../../../store/reducers/mainReducer";
import { MainReducer } from "../../../store/reducers/types";
import {
  MainAction,
  ScreenSizeChangedAction,
  ChangeThemeAction,
  ShowStickyNavAction
} from "../../../store/actions/types";

const initialState: MainReducer = {
  isDesktop: false,
  themeIndex: 0,
  stickyNavVisible: false
};

it("returns initialState by default", () => {
  const initAction = {
    type: "@@INIT"
  };

  const returnedState = mainReducer(undefined, initAction as MainAction);
  expect(returnedState).toEqual(initialState);
});

it("handles SCREEN_SIZE_CHANGED correctly", () => {
  const mockScreenSizeChangedAction: ScreenSizeChangedAction = {
    type: "SCREEN_SIZE_CHANGED",
    payload: "toDesktop"
  };

  const expectedState: MainReducer = {
    ...initialState,
    isDesktop: true
  };

  const returnedState = mainReducer(undefined, mockScreenSizeChangedAction);
  expect(returnedState).toEqual(expectedState);
});

describe("handle CHANGE_THEME", () => {
  const mockChangeThemeAction: ChangeThemeAction = {
    type: "CHANGE_THEME",
    payload: null
  };

  it("increments themeIndex usually", () => {
    const expectedState: MainReducer = {
      ...initialState,
      themeIndex: 1
    };

    const returnedState = mainReducer(undefined, mockChangeThemeAction);
    expect(returnedState).toEqual(expectedState);
  });

  it("resets themeIndex to 0 when themeIndex is 5", () => {
    const mockStateBeforeAction: MainReducer = {
      ...initialState,
      themeIndex: 5
    };

    const expectedState: MainReducer = {
      ...initialState,
      themeIndex: 0
    };

    const returnedState = mainReducer(mockStateBeforeAction, mockChangeThemeAction);
    expect(returnedState).toEqual(expectedState);
  });
});

it("handles SHOW_STICKY_NAV correctly", () => {
  const mockShowStickyNavAction: ShowStickyNavAction = {
    type: "SHOW_STICKY_NAV",
    payload: true
  };

  const expectedState: MainReducer = {
    ...initialState,
    stickyNavVisible: true
  };

  const returnedState = mainReducer(undefined, mockShowStickyNavAction);
  expect(returnedState).toEqual(expectedState);
});
