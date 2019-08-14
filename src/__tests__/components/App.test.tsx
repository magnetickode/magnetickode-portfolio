import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import App from "../../components/App";

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("matches snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

it("renders without error", () => {
  const AppComponent = wrapper.find("[data-test='AppComponent']");
  expect(AppComponent.length).toBe(1);
});
