import { ChangeThemeGen } from "../../store/actions/types";

export interface Props {
  hamburgerOpened: boolean;
  mobileNavVisible: boolean;
  toggleHamburger: () => void;
  isDesktop: boolean;
  stickyNavVisible: boolean;
  hashRoute: string;
  changeTheme: ChangeThemeGen;
}

export interface StyledNavbarProps {
  sticky: boolean;
}
