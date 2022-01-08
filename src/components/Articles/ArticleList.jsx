import React from "react";
import { useSelector } from "react-redux";
import Article from "./Article";
import "./articlelist.css";

const ArticleList = () => {
  const { data } = useSelector((state) => state.stories);
  return data.length ? (
    <div className="article-container">
      {data.map(({ id, webUrl, fields }) => {
        const { headline, thumbnail } = fields;
        return (
          <Article
            key={id}
            webUrl={webUrl}
            thumbnail={thumbnail}
            headline={headline}
          />
        );
      })}
    </div>
  ) : null;
};

export default ArticleList;
