import {
  ScreenSizeChangedGen,
  ShowStickyNavGen,
  ChangeScrollGen,
  ChangeHashRouteGen
} from "../../store/actions/types";

export interface Props {
  isDesktop: boolean;
  themeIndex: number;
  stickyNavVisible: boolean;
  scrolled: boolean;
  hashRoute: string;
  screenSizeChanged: ScreenSizeChangedGen;
  showStickyNav: ShowStickyNavGen;
  changeScroll: ChangeScrollGen;
  changeHashRoute: ChangeHashRouteGen;
}
