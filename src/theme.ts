import backgroundImage from "./assets/images/background.jpg";

const hexToRgb = (hex: string): string | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  } else {
    return null;
  }
};

export interface MainThemeType {
  primaryColor: string;
  secondaryColor: string;
  primaryColorRgba: (opacity: number) => string;
  secondaryColorRgba: (opacity: number) => string;
  backgroundImage: string;
}

export const mainTheme: MainThemeType = {
  primaryColor: "#647DEE",
  secondaryColor: "#7F53AC",
  primaryColorRgba(opacity) {
    return `rgba(${hexToRgb(this.primaryColor)}, ${opacity})`;
  },
  secondaryColorRgba(opacity) {
    return `rgba(${hexToRgb(this.secondaryColor)}, ${opacity})`;
  },
  backgroundImage: `url(${backgroundImage})`
};
