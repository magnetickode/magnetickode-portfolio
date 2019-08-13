import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Hamburger from "./Hamburger";
import { Props } from "./types";

let wrapper: ShallowWrapper;

const props: Props = {
  opened: false,
  toggleHamburger: () => null
};

beforeEach(() => {
  wrapper = shallow(<Hamburger {...props} />);
});

it("matches snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

it("renders without error", () => {
  const HamburgerComponent = wrapper.find("[data-test='HamburgerComponent']");
  expect(HamburgerComponent.length).toBe(1);
});
