import { ScreenSizeChangedGen, ShowStickyNavGen } from "../../store/actions/types";

export interface Props {
  isDesktop: boolean;
  themeIndex: number;
  stickyNavVisible: boolean;
  screenSizeChanged: ScreenSizeChangedGen;
  showStickyNav: ShowStickyNavGen;
}
