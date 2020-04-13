import { Theme } from "./types";
import backgroundImage from "../../assets/images/background.jpg";
import backgroundImage2 from "../../assets/images/background2.jpg";
import backgroundImage3 from "../../assets/images/background3.jpg";
import backgroundImage4 from "../../assets/images/background4.jpg";
import backgroundImage5 from "../../assets/images/background5.jpg";
import backgroundImage6 from "../../assets/images/background6.jpg";
// import blueIco from "../../assets/ico/blue.ico";
// import orangeIco from "../../assets/ico/orange.ico";
// import redIco from "../../assets/ico/red.ico";
// import greenIco from "../../assets/ico/green.ico";
// import pinkIco from "../../assets/ico/pink.ico";
// import darkIco from "../../assets/ico/dark.ico";

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
  backgroundImage: `url(${backgroundImage})`,
  ico: {
    favicon: "/themes/blue/favicon.ico",
    size16: "/themes/blue/favicon-16x16.png",
    size32: "/themes/blue/favicon-32x32.png",
    size192: "/themes/blue/android-chrome-192x192.png",
    size512: "/themes/blue/android-chrome-512x512.png",
    appleTouch: "/themes/blue/apple-touch-icon.png",
    manifest: "/themes/blue/manifest.json"
  }
};

const orangishTheme: Theme = {
  ...mainTheme,
  primaryColor: "#FE5858",
  secondaryColor: "#EE9617",
  backgroundImage: `url(${backgroundImage2})`,
  ico: {
    favicon: "/themes/orange/favicon.ico",
    size16: "/themes/orange/favicon-16x16.png",
    size32: "/themes/orange/favicon-32x32.png",
    size192: "/themes/orange/android-chrome-192x192.png",
    size512: "/themes/orange/android-chrome-512x512.png",
    appleTouch: "/themes/orange/apple-touch-icon.png",
    manifest: "/themes/orange/manifest.json"
  }
};

const reddishTheme: Theme = {
  ...mainTheme,
  primaryColor: "#FF0000",
  secondaryColor: "#990000",
  backgroundImage: `url(${backgroundImage3})`,
  ico: {
    favicon: "/themes/red/favicon.ico",
    size16: "/themes/red/favicon-16x16.png",
    size32: "/themes/red/favicon-32x32.png",
    size192: "/themes/red/android-chrome-192x192.png",
    size512: "/themes/red/android-chrome-512x512.png",
    appleTouch: "/themes/red/apple-touch-icon.png",
    manifest: "/themes/red/manifest.json"
  }
};

const greenishTheme: Theme = {
  ...mainTheme,
  primaryColor: "#0BA360",
  secondaryColor: "#3CBA92",
  backgroundImage: `url(${backgroundImage6})`,
  ico: {
    favicon: "/themes/green/favicon.ico",
    size16: "/themes/green/favicon-16x16.png",
    size32: "/themes/green/favicon-32x32.png",
    size192: "/themes/green/android-chrome-192x192.png",
    size512: "/themes/green/android-chrome-512x512.png",
    appleTouch: "/themes/green/apple-touch-icon.png",
    manifest: "/themes/green/manifest.json"
  }
};

const pinkishTheme: Theme = {
  ...mainTheme,
  primaryColor: "#FA71CD",
  secondaryColor: "#FF758C",
  backgroundImage: `url(${backgroundImage5})`,
  ico: {
    favicon: "/themes/pink/favicon.ico",
    size16: "/themes/pink/favicon-16x16.png",
    size32: "/themes/pink/favicon-32x32.png",
    size192: "/themes/pink/android-chrome-192x192.png",
    size512: "/themes/pink/android-chrome-512x512.png",
    appleTouch: "/themes/pink/apple-touch-icon.png",
    manifest: "/themes/pink/manifest.json"
  }
};

const darkishTheme: Theme = {
  ...mainTheme,
  primaryColor: "#28313B",
  secondaryColor: "#485461",
  backgroundImage: `url(${backgroundImage4})`,
  ico: {
    favicon: "/themes/dark/favicon.ico",
    size16: "/themes/dark/favicon-16x16.png",
    size32: "/themes/dark/favicon-32x32.png",
    size192: "/themes/dark/android-chrome-192x192.png",
    size512: "/themes/dark/android-chrome-512x512.png",
    appleTouch: "/themes/dark/apple-touch-icon.png",
    manifest: "/themes/dark/manifest.json"
  }
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
