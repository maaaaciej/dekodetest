import React from "react";
import { shallow, mount } from "enzyme";

import Header from "./header.component";
import MobileMenu from "../MobileMenu/mobilemenu.component";

describe("Header", () => {
  it("renders", () => {
    shallow(<Header />);
  });
  it("renders the mobile menu when clicking the hamburger", () => {
    const wrapper = mount(<Header />);
    const mobileMenuButton = wrapper.find("#mobile-menu");
    mobileMenuButton.simulate("click");
    wrapper.update();
    expect(wrapper.containsMatchingElement(<MobileMenu />)).toBe(true);
  });
});
