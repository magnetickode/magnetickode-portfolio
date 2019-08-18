import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Footer from "../../components/Footer";

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

it("matches snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

it("renders without error", () => {
  const FooterComponent = wrapper.find("[data-test='FooterComponent']");
  expect(FooterComponent.length).toBe(1);
});
