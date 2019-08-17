export interface MainReducer {
  isDesktop: boolean;
  themeIndex: number;
  stickyNavVisible: boolean;
}

export interface ReduxState {
  main: MainReducer;
}
