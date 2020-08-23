import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";

import ProfileCard from "./profilecard.component";
import avatar from "../../assets/avatar/avatar.png";

describe("ProfileCard", () => {
  const mockData = {
    avatar,
    name: "Maciej",
    date: "30/09/2020",
    readtime: 2,
    position: "developer",
    socials: {
      Twitter: "https://twitter.com/",
      Instagram: "https://www.instagram.com/",
    },
  };
  it("renders", () => {
    shallow(<ProfileCard author={mockData} />);
  });
  it("renders props correctly", () => {
    const wrapper = shallow(<ProfileCard author={mockData} />);
    const name = wrapper.find(".profilecard-container-name");
    const text = wrapper.find(".profilecard-container-text");
    expect(name.text()).toBe("Maciej");
    expect(text.text()).toBe("developer - 2 min read - 30/09/2020");
  });
  it("renders 2 social media icons if two links are given", () => {
    const wrapper = shallow(<ProfileCard author={mockData} />);
    const numberOfIcons = wrapper
      .find(".profilecard-container-socials")
      .props()
      .children.filter(Boolean);
    //   The filter method above filters out null, as a null value is counted as an element of the children-array, which is not somethin we want to count in the test
    expect(numberOfIcons).toHaveLength(2);
  });
});
