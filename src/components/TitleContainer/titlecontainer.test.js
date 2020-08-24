import React from "react";
import { shallow, mount } from "enzyme";

import TitleContainer from "./titlecontainer.component";
import ProfileCard from "../ProfileCard/profilecard.component";
import data from "../../assets/data/data.static";

describe("Title Container", () => {
  it("renders", () => {
    shallow(<TitleContainer />);
  });
  it("renders without any props given", () => {
    const wrapper = shallow(<TitleContainer />);
    const title = wrapper.find(".titlecontainer-title");
    const ingress = wrapper.find(".titlecontainer-ingress");

    expect(title.text()).toBe("Title");
    expect(ingress.text()).toBe("Ingress");
  });
  it("renders props correctly", () => {
    const wrapper = shallow(
      <TitleContainer title="Test Title" ingress="Test Ingress" />
    );
    const title = wrapper.find(".titlecontainer-title");
    const ingress = wrapper.find(".titlecontainer-ingress");
    expect(title.text()).toBe("Test Title");
    expect(ingress.text()).toBe("Test Ingress");
  });
  it("renders the author-card", () => {
    const wrapper = mount(<TitleContainer author={data.author} />);
    expect(wrapper.containsMatchingElement(<ProfileCard />)).toBe(true);
  });
});
