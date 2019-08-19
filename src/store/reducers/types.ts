export interface MainReducer {
  isDesktop: boolean;
  themeIndex: number;
  stickyNavVisible: boolean;
  scrolled: boolean;
  hashRoute: string;
}

export interface ReduxState {
  main: MainReducer;
}
