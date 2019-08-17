import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Routes from "../../components/Routes";

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Routes />);
});

it("matches snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

it("renders without error", () => {
  const RoutesComponent = wrapper.find("[data-test='RoutesComponent']");
  expect(RoutesComponent.length).toBe(1);
});
