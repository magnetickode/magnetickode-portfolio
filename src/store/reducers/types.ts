export interface MainReducer {
  isDesktop: boolean;
  themeIndex: number;
}

export interface ReduxState {
  main: MainReducer;
}
