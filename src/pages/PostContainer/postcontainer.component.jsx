import React from "react";

import SiteMap from "../../components/SiteMap/sitemap.component";
import TitleContainer from "../../components/TitleContainer/titlecontainer.component";
import ImageContainer from "../../components/ImageContainer/imagecontainer.component";
import CardContainer from "../../components/CardContainer/cardcontainer.component";
import CallToActionContainer from "../../components/CallToActionContainer/cta.component";

import "./postcontainer.styles.scss";

const PostContainer = () => {
  return (
    <div>
      <SiteMap />
      <TitleContainer />
      <ImageContainer />
      <CardContainer />
      <CallToActionContainer />
    </div>
  );
};

export default PostContainer;
