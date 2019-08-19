export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  primaryColorRgba: (opacity: number) => string;
  secondaryColorRgba: (opacity: number) => string;
  textColorRgba: (opacity: number) => string;
  textColor: string;
  backgroundImage: string;
}
