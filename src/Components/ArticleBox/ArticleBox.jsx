import React from "react";
import { Link } from "react-router-dom";

function ArticleBox({ article }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg">
      <Link to={`/article/${article.link}`}>
        <img
          src={`https://shoppingmilad.liara.run/uploads/covers/${article.image}`}
          alt={article.image}
          className="w-full rounded-2xl"
        />
      </Link>
      <div className="flex items-center justify-between mt-1.5 p-2.5">
        <div className="flex items-center gap-x-1.5 text-sm font-DanaDemiBold">
          <svg className="w-5 h-5">
            <use href="#tag"></use>
          </svg>
          <span>{article.category.title}</span>
        </div>
        <span className="flex items-center gap-x-1.5">
          <svg className="w-5 h-5">
            <use href="#clock"></use>
          </svg>
          <span className="font-DanaDemiBold text-xs mt-1">{article.date}</span>
        </span>
      </div>
      <Link
        to={`/article/${article.link}`}
        className="font-DanaDemiBold line-clamp-1 mt-1.5 p-2.5 text-sm md:text-base"
      >
        {article.title}
      </Link>
    </div>
  );
}

export default ArticleBox;
