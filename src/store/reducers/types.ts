export interface MainReducer {
  isDesktop: boolean;
  themeIndex: number;
  stickyNavVisible: boolean;
  //stickyNav: boolean;
}

export interface ReduxState {
  main: MainReducer;
}
