import { ChangeThemeGen } from "../../store/actions/types";

export interface Props {
  isDesktop: boolean;
  hashRoute: string;
  stickyNavVisible: boolean;
  changeTheme: ChangeThemeGen;
}
