import React from "react";
import "./keywords.css";

const Keywords = ({ tags, handleKeyword }) => {
  return tags.map((tag) => {
    const { id, webTitle } = tag;
    return (
      <p
        key={id}
        onClick={() => handleKeyword(webTitle)}
        className="suggestions"
      >
        {webTitle}
      </p>
    );
  });
};

export default Keywords;
