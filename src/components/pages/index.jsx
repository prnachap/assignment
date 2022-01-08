import React from "react";
import { useSelector } from "react-redux";
import Alert from "../Alert/Alert";

import ArticleList from "../Articles/ArticleList";
import Search from "../Form/Search";
import Spinner from "../Spinner/Spinner";

const ArticlePage = () => {
  const { loading, error } = useSelector((state) => state.stories);
  return (
    <div>
      <Search />
      {loading ? <Spinner /> : <ArticleList />}
      {!loading && error && (
        <Alert>Something went wrong! Please try again</Alert>
      )}
    </div>
  );
};

export default ArticlePage;
