import { ScreenSizeChangedGen } from "../../store/actions/types";

export interface Props {
  isDesktop: boolean;
  themeIndex: number;
  screenSizeChanged: ScreenSizeChangedGen;
}
