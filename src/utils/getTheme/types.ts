interface Ico {
  favicon: string;
  size16: string;
  size32: string;
  size192: string;
  size512: string;
  appleTouch: string;
  manifest: string;
}

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  primaryColorRgba: (opacity: number) => string;
  secondaryColorRgba: (opacity: number) => string;
  textColorRgba: (opacity: number) => string;
  textColor: string;
  backgroundImage: string;
  ico: Ico;
}
