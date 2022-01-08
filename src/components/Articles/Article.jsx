import React from "react";
import defaultIcon from "../../assets/default.png";

const Article = ({ webUrl, thumbnail, headline }) => {
  return (
    <div className="article">
      <a
        className="article__link"
        href={webUrl}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={thumbnail ?? defaultIcon}
          alt="thumnail"
          className="article__image"
        />
        <span className="article__title">{headline}</span>
      </a>
    </div>
  );
};

export default Article;
