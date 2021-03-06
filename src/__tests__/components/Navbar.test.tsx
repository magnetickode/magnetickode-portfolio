import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Navbar from "../../components/Navbar";
import { changeTheme } from "../../store/actions/mainActions";
import { Props } from "../../components/Navbar/types";

const props: Props = {
  hamburgerOpened: false,
  mobileNavVisible: false,
  toggleHamburger: () => null,
  isDesktop: false,
  stickyNavVisible: false,
  changeTheme
};

describe("screen size mobile", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar {...props} />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without error", () => {
    const NavbarComponent = wrapper.find("[data-test='NavbarComponent']");
    expect(NavbarComponent.length).toBe(1);
  });

  it("renders Hamburger component", () => {
    const Hamburger = wrapper.find("[data-test='Hamburger']");
    expect(Hamburger.length).toBe(1);
  });

  it("renders MobileNav component when hamburger opened", () => {
    const hamburgerOpenProps: Props = {
      ...props,
      mobileNavVisible: true
    };

    wrapper = shallow(<Navbar {...hamburgerOpenProps} />);

    const MobileNav = wrapper.find("[data-test='MobileNav']");
    expect(MobileNav.length).toBe(1);
  });

  it("does not render MobileNav component when hamburger closed", () => {
    const MobileNav = wrapper.find("[data-test='MobileNav']");
    expect(MobileNav.length).toBe(0);
  });
});

describe("screen size desktop", () => {
  const desktopProps: Props = {
    ...props,
    isDesktop: true
  };

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar {...desktopProps} />);
  });

  it("does not render Hamburger component", () => {
    const Hamburger = wrapper.find("[data-test='Hamburger']");
    expect(Hamburger.length).toBe(0);
  });
});
