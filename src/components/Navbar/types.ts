import { MutableRefObject } from "react";

import { ChangeThemeGen } from "../../store/actions/types";

export interface Props {
  hamburgerOpened: boolean;
  mobileNavVisible: boolean;
  toggleHamburger: () => void;
  isDesktop: boolean;
  stickyNavVisible: boolean;
  changeTheme: ChangeThemeGen;
}

export interface StyledNavbarProps {
  sticky: boolean;
}

export interface LogoProps {
  isDesktop: boolean;
  sticky: boolean;
}
