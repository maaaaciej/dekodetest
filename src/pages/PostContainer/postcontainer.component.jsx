import React from "react";

import SiteMap from "../../components/SiteMap/sitemap.component";
import TitleContainer from "../../components/TitleContainer/titlecontainer.component";
import ImageContainer from "../../components/ImageContainer/imagecontainer.component";
import CardContainer from "../../components/CardContainer/cardcontainer.component";
import Button from "../../components/Button/button.component";

//All of the information given in the wireframe
import data from "../../assets/data/data.static";

import "./postcontainer.styles.scss";

const PostContainer = () => {
  const { author, buttonText, head, imageContainer, body } = data;
  return (
    <div className="postcontainer">
      <SiteMap />
      <TitleContainer
        author={author}
        title={head.title}
        ingress={head.ingress}
      />
      {/* Setting the inner HTML of the paragraph, as it includes an anchor-tag. */}
      <p
        className="postcontainer-paragraph"
        dangerouslySetInnerHTML={body.firstParagraph}
      />
      <ImageContainer
        image={imageContainer.image}
        excerpt={imageContainer.excerpt}
        caption={imageContainer.caption}
      />
      <p className="postcontainer-paragraph">{body.secondParagraph}</p>
      <h3 className="postcontainer-title">{body.thirdParagraph.title}</h3>
      <p className="postcontainer-paragraph">{body.thirdParagraph.text}</p>
      <CardContainer />
      <h3 className="postcontainer-title">{body.fourthParagraph.title}</h3>
      <p className="postcontainer-paragraph">{body.fourthParagraph.text}</p>
      <div className="postcontainer-button">
        <Button buttonText={buttonText} />
      </div>
    </div>
  );
};

export default PostContainer;
