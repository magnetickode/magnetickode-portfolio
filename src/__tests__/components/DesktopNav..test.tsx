import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import DesktopNav from "../../components/DesktopNav";
import { Props } from "../../components/DesktopNav/types";

let wrapper: ShallowWrapper;

const props: Props = {
  sticky: false
};

beforeEach(() => {
  wrapper = shallow(<DesktopNav {...props} />);
});

it("matches snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

it("renders without error", () => {
  const DesktopNavComponent = wrapper.find("[data-test='DesktopNavComponent']");
  expect(DesktopNavComponent.length).toBe(1);
});
