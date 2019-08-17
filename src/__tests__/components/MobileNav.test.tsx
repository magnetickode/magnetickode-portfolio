import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import MobileNav from "../../components/MobileNav";
import { Props } from "../../components/MobileNav/types";

let wrapper: ShallowWrapper;

const props: Props = {
  sticky: false,
  collapse: false
};

beforeEach(() => {
  wrapper = shallow(<MobileNav {...props} />);
});

it("matches snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

it("renders without error", () => {
  const MobileNavComponent = wrapper.find("[data-test='MobileNavComponent']");
  expect(MobileNavComponent.length).toBe(1);
});
