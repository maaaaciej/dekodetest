import React from "react";

import SiteMap from "../../components/SiteMap/sitemap.component";
import TitleContainer from "../../components/TitleContainer/titlecontainer.component";
import ImageContainer from "../../components/ImageContainer/imagecontainer.component";
import CardContainer from "../../components/CardContainer/cardcontainer.component";
import CallToActionContainer from "../../components/CallToActionContainer/cta.component";

//All of the information given in the wireframe
import data from "../../assets/data/data.static";

import "./postcontainer.styles.scss";

const PostContainer = () => {
  const { author, callToAction, head, imageContainer, body } = data;
  return (
    <div>
      <SiteMap />
      <TitleContainer
        author={author}
        title={head.title}
        ingress={head.ingress}
      />
      {/* Setting the inner HTML of the paragraph, as it includes an anchor-tag. */}
      <p dangerouslySetInnerHTML={body.firstParagraph} />
      <ImageContainer
        image={imageContainer.image}
        excerpt={imageContainer.excerpt}
        caption={imageContainer.caption}
      />
      <p>{body.secondParagraph}</p>
      <h3>{body.thirdParagraph.title}</h3>
      <p>{body.thirdParagraph.text}</p>
      <CardContainer />
      <CallToActionContainer
        title={callToAction.title}
        text={callToAction.text}
        buttonText={callToAction.buttonText}
      />
    </div>
  );
};

export default PostContainer;
