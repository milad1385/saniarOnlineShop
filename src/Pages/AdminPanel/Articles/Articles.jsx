import React from "react";
import AddNewArticle from "./AddNewArticle/AddNewArticle";
import ArticlesList from "./ArticlesList/ArticlesList";

function Articles() {
  return (
    <div className="container">
      <AddNewArticle />
      <ArticlesList />
    </div>
  );
}

export default Articles;
