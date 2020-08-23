import React from "react";
import Card from "./card.component";
import { shallow } from "enzyme";
import "../../setupTests";

describe("Card", () => {
  it("should render the card with a fallback text", () => {
    const wrapper = shallow(<Card />);
    const title = wrapper.find(".card-title");
    const date = wrapper.find(".card-date");
    const text = wrapper.find(".card-text");

    expect(title.text()).toBe("Card Title");
    expect(date.text()).toBe("21/08/2020");
    expect(text.text()).toBe(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis pellentesque leo, ac congue orci lacinia sed."
    );
  });
  it("should render the card with props", () => {
    const propWrapper = shallow(
      <Card title="Prop Title" date="30/09/1997" text="Prop Text" />
    );
    const propTitle = propWrapper.find(".card-title");
    const propDate = propWrapper.find(".card-date");
    const propText = propWrapper.find(".card-text");
    expect(propTitle.text()).toBe("Prop Title");
    expect(propDate.text()).toBe("30/09/1997");
    expect(propText.text()).toBe("Prop Text");
  });
});
