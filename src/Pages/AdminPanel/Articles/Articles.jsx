import React, { useContext, useEffect } from "react";
import AddNewArticle from "./AddNewArticle/AddNewArticle";
import ArticlesList from "./ArticlesList/ArticlesList";
import { AppContext } from "../../../App";

function Articles() {
  const {setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
  return (
    <div className="container">
      <AddNewArticle />
      <ArticlesList />
    </div>
  );
}

export default Articles;
