import React, { useState } from "react";
import { shallow } from "enzyme";
import "../../setupTests";

import CardContainer, { setxOffset } from "./cardcontainer.component";

describe("Card Container", () => {
  const mockData = [
    {
      title: "Card 1",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      title: "Card 2",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      title: "Card 3",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      title: "Card 4",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
  ];
  it("renders", () => {
    shallow(<CardContainer cards={mockData} />);
  });

  it("Should render four cards given the mockData", () => {
    const wrapper = shallow(<CardContainer cards={mockData} />);
    const container = wrapper.find(".cardcontainer-wrapper");
    //calculating the number of cards based on the number of children of the card-wrapper
    const numberOfCards = container.props().children.length;
    expect(numberOfCards).toBe(4);
  });
});
