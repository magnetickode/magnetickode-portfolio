import { ChangeHashRoutePayload } from "../../store/actions/types";

const elementVerticalPositionById = (id: string): number => {
  const element = document.getElementById(id);
  let rectangle = { top: 0 };
  if (element) {
    rectangle = element.getBoundingClientRect();
  }
  return rectangle.top;
};

const getVerticalScrollPosition = (): number => {
  if (window.pageYOffset) {
    // Firefox, Chrome, Opera, Safari.
    return window.pageYOffset;
  }
  if (document.documentElement && document.documentElement.scrollTop) {
    return document.documentElement.scrollTop;
  } // Internet Explorer 6 (standards mode).
  if (document.body.scrollTop) {
    return document.body.scrollTop;
  } // Internet Explorer 6, 7 and 8.
  return 0; // None of the above.
};

const padding = 400;

export const getCurrentHashRoute = (): ChangeHashRoutePayload => {
  if (
    window.scrollY <
    elementVerticalPositionById("skills") + getVerticalScrollPosition() - padding
  ) {
    return "#home";
  } else if (
    window.scrollY >=
    elementVerticalPositionById("contact") + getVerticalScrollPosition() - padding
  ) {
    return "#contact";
  } else if (
    window.scrollY >=
    elementVerticalPositionById("about") + getVerticalScrollPosition() - padding
  ) {
    return "#about";
  } else if (
    window.scrollY >=
    elementVerticalPositionById("portfolio") + getVerticalScrollPosition() - padding
  ) {
    return "#portfolio";
  } else if (
    window.scrollY >=
    elementVerticalPositionById("skills") + getVerticalScrollPosition() - padding
  ) {
    return "#skills";
  }
  return "#home";
};

export const checkIfSticky = (): boolean =>
  window.scrollY >=
  elementVerticalPositionById("skills") + getVerticalScrollPosition() - 150;
