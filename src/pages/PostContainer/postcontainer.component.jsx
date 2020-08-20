import React from "react";

import SiteMap from "../../components/SiteMap/sitemap.component";
import TitleContainer from "../../components/TitleContainer/titlecontainer.component";
import ImageContainer from "../../components/ImageContainer/imagecontainer.component";
import CardContainer from "../../components/CardContainer/cardcontainer.component";
import CallToActionContainer from "../../components/CallToActionContainer/cta.component";

import ocean from "../../assets/ocean/ocean.png";

import "./postcontainer.styles.scss";

const PostContainer = () => {
  return (
    <div>
      <SiteMap />
      <TitleContainer />
      <ImageContainer
        image={ocean}
        excerpt={`“The process of making the dye was long, difficult and expensive”`}
        caption={`In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum, between approximately 380 and 450 nanometers.`}
      />
      <CardContainer />
      <CallToActionContainer
        title={"Teft?"}
        text={
          "As a result, when violet light strikes the eye, the S-cone is stimulated strongly and the L-cone is stimulated weakly."
        }
        buttonText={"Why teft?"}
      />
    </div>
  );
};

export default PostContainer;
