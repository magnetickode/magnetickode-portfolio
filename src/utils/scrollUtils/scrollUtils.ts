const elementVerticalPositionById = (id: string): number => {
  const element = document.getElementById(id);
  let rectangle = { top: 0 };
  if (element) {
    rectangle = element.getBoundingClientRect();
  }
  return rectangle.top;
};

const padding = 400;

export const getCurrentHashRoute = (scrollY: number): string => {
  if (scrollY < elementVerticalPositionById("skills") + scrollY - padding) {
    return "#home";
  } else if (scrollY >= elementVerticalPositionById("contact") + scrollY - padding) {
    return "#contact";
  } else if (scrollY >= elementVerticalPositionById("about") + scrollY - padding) {
    return "#about";
  } else if (scrollY >= elementVerticalPositionById("portfolio") + scrollY - padding) {
    return "#portfolio";
  } else if (scrollY >= elementVerticalPositionById("skills") + scrollY - padding) {
    return "#skills";
  }

  return "#home";
};

export const checkIfSticky = (scrollY: number): boolean => {
  const skillsSectionPosition = elementVerticalPositionById("skills") + scrollY;
  return skillsSectionPosition !== 0 && scrollY >= skillsSectionPosition - 200;
};
