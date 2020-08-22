// eslint-disable-next-line
import React from "react";

import avatar from "../avatar/avatar.png";

import image1 from "../card-images/1.svg";
import image2 from "../card-images/2.svg";
import image3 from "../card-images/3.svg";

import ocean from "../ocean/ocean.png";

const data = {
  author: {
    name: "Jane Doe",
    position: "Projectmanager Dekode",
    readtime: "5",
    date: "2 june",
    socials: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://twitter.com/",
    ],
    avatar: avatar,
  },

  head: {
    title: "Purple circles",
    ingress:
      "Purple is closely associated with violet. In optics, purple and violet refer to colors that look similar, but purples are mixtures of red and blue or violet light.",
  },
  body: {
    firstParagraph: {
      __html: `Purple is closely associated with violet. In common usage, both refer to colors that are between red and blue in hue, with purples closer to red and violets closer to blue. Similarly, in the traditional painters'
        <a href="https://www.dekode.no">color wheel</a> , purple and violet are both placed between red and blue, with purple is closer to red`,
    },
    secondParagraph: `In humans, the L (red) cone in the eye is primarily sensitive to long wavelength light in the yellow-red region of the spectrum, but is also somewhat sensitive to the shorter wavelength violet light that primarily stimulates the S (blue) cone.`,
    thirdParagraph: {
      title: "As a result",
      text: `As a result, when violet light strikes the eye, the S-cone is stimulated strongly and the L-cone is stimulated weakly. Accordingly, strong blue light mixed with weaker red light can mimic this pattern of stimulation, causing humans to perceive colors that the same hue as violet, but with lower saturation.`,
    },
    fourthParagraph: {
      title: "Teft?",
      text:
        "As a result, when violet light strikes the eye, the S-cone is stimulated strongly and the L-cone is stimulated weakly.",
    },
  },
  cardCarousel: [
    {
      image: image1,
      title: "Lorem ipsum",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      image: image2,

      title: "Lorem ipsum",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      image: image3,

      title: "Lorem ipsum",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      image: image1,
      title: "Lorem ipsum",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      image: image2,

      title: "Lorem ipsum",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      image: image3,

      title: "Lorem ipsum",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      image: image1,
      title: "Lorem ipsum",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      image: image2,

      title: "Lorem ipsum",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
    {
      image: image3,

      title: "Lorem ipsum",
      date: "17. august 2020",
      text:
        "In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.",
    },
  ],
  buttonText: "Why teft?",
  imageContainer: {
    image: ocean,
    excerpt: `“The process of making the dye was long, difficult and expensive”`,
    caption: `In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum, between approximately 380 and 450 nanometers.`,
  },
};
export default data;
