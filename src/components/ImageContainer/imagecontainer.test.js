import React from "react";
import { shallow } from "enzyme";

import ImageContainer from "./imagecontainer.component";

import data from "../../assets/data/data.static";
import "../../setupTests";

describe("Image Container", () => {
  const { imageContainer } = data;
  it("renders", () => {
    shallow(
      <ImageContainer
        image={imageContainer.image}
        excerpt={imageContainer.excerpt}
        caption={imageContainer.caption}
      />
    );
  });
  it("renders props", () => {
    const wrapper = shallow(
      <ImageContainer
        image={imageContainer.image}
        excerpt={"Testing the excerpt"}
        caption={"Testing the caption"}
      />
    );
    const excerpt = wrapper.find(".imagecontainer-excerpt");
    const caption = wrapper.find(".imagecontainer-image-caption");

    expect(excerpt.text()).toBe("Testing the excerpt");
    expect(caption.text()).toBe("Testing the caption");
  });
});
