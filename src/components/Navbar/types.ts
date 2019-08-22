export interface Props {
  hamburgerOpened: boolean;
  toggleHamburger: () => void;
  isDesktop: boolean;
  stickyNavVisible: boolean;
  hashRoute: string;
  changeTheme: () => void | null;
}

export interface StyledNavbarProps {
  sticky: boolean;
}
