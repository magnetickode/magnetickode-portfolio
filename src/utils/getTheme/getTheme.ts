import { Theme } from "./types";
import backgroundImage from "../../assets/images/background.jpg";
import backgroundImage2 from "../../assets/images/background2.jpg";
import backgroundImage3 from "../../assets/images/background3.jpg";
import backgroundImage4 from "../../assets/images/background4.jpg";
import backgroundImage5 from "../../assets/images/background5.jpg";
import backgroundImage6 from "../../assets/images/background6.jpg";

const hexToRgb = (hex: string): string | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
      result[3],
      16
    )}`;
  } else {
    return null;
  }
};

const mainTheme: Theme = {
  primaryColor: "#647DEE",
  secondaryColor: "#7F53AC",
  primaryColorRgba(opacity) {
    return `rgba(${hexToRgb(this.primaryColor)}, ${opacity})`;
  },
  secondaryColorRgba(opacity) {
    return `rgba(${hexToRgb(this.secondaryColor)}, ${opacity})`;
  },
  textColorRgba(opacity) {
    return `rgba(${hexToRgb(this.textColor)}, ${opacity})`;
  },
  textColor: "#FFFFFF",
  backgroundImage: `url(${backgroundImage})`
};

const orangishTheme: Theme = {
  ...mainTheme,
  primaryColor: "#FE5858",
  secondaryColor: "#EE9617",
  backgroundImage: `url(${backgroundImage2})`
};

const reddishTheme: Theme = {
  ...mainTheme,
  primaryColor: "#FF0000",
  secondaryColor: "#990000",
  backgroundImage: `url(${backgroundImage3})`
};

const greenishTheme: Theme = {
  ...mainTheme,
  primaryColor: "#0BA360",
  secondaryColor: "#3CBA92",
  backgroundImage: `url(${backgroundImage6})`
};

const pinkishTheme: Theme = {
  ...mainTheme,
  primaryColor: "#FA71CD",
  secondaryColor: "#FF758C",
  backgroundImage: `url(${backgroundImage5})`
};

const darkishTheme: Theme = {
  ...mainTheme,
  primaryColor: "#28313B",
  secondaryColor: "#485461",
  backgroundImage: `url(${backgroundImage4})`
};

const getTheme = (themeIndex: number): Theme => {
  switch (themeIndex) {
    case 0:
      return mainTheme;
    case 1:
      return orangishTheme;
    case 2:
      return reddishTheme;
    case 3:
      return greenishTheme;
    case 4:
      return pinkishTheme;
    case 5:
      return darkishTheme;
    default:
      return mainTheme;
  }
};

export default getTheme;
