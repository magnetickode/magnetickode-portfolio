import { MutableRefObject } from "react";

import { ChangeThemeGen } from "../../store/actions/types";

export interface Props {
  isDesktop: boolean;
  stickyNavVisible: boolean;
  changeTheme: ChangeThemeGen;
}
