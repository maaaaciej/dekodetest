import React from "react";
import Button from "./button.component";
import { shallow } from "enzyme";
import "../../setupTests";

describe("Button", () => {
  it("should render the button with a fallback text of 'Click Me' ", () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find(".button-button");
    expect(button.text()).toBe("Click Me");
  });
  it("should render the button with text from props", () => {
    const propTest = shallow(<Button buttonText="Testing Props" />);
    const propButton = propTest.find(".button-button");
    expect(propButton.text()).toBe("Testing Props");
  });
});
