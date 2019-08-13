import { MainThemeType } from "./types";
import backgroundImage from "./assets/images/background.jpg";

const hexToRgb = (hex: string): string | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  } else {
    return null;
  }
};

export const mainTheme: MainThemeType = {
  primaryColor: "#647DEE",
  secondaryColor: "#7F53AC",
  primaryColorRgba(opacity) {
    return `rgba(${hexToRgb(this.primaryColor)}, ${opacity})`;
  },
  secondaryColorRgba(opacity) {
    return `rgba(${hexToRgb(this.secondaryColor)}, ${opacity})`;
  },
  textColor: "#FFF",
  backgroundImage: `url(${backgroundImage})`
};
