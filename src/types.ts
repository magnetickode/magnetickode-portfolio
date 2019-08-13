export interface MainThemeType {
  primaryColor: string;
  secondaryColor: string;
  primaryColorRgba: (opacity: number) => string;
  secondaryColorRgba: (opacity: number) => string;
  textColor: string;
  backgroundImage: string;
}

export interface ContextType {
  isDesktop: boolean;
}
