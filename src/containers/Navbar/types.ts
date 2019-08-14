import { MutableRefObject } from "react";

import { ChangeThemeGen } from "../../store/actions/types";

export interface Props {
  navbarRef: MutableRefObject<HTMLDivElement | null>;
  isDesktop: boolean;
  stickyNavVisible: boolean;
  changeTheme: ChangeThemeGen;
}
