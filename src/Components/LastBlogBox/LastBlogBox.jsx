import React from "react";
import { Link } from "react-router-dom";

function LastBlogBox({ lastArticle }) {
  return (
    <Link to={`/article/${lastArticle.link}`} className="flex items-center gap-x-4">
      <div>
        <img
          src={`http://localhost:3001/uploads/covers/${lastArticle.image}`}
          alt={lastArticle.image}
          className="w-[100px] rounded-md"
        />
      </div>
      <div>
        <h3 className="font-DanaDemiBold text-sm w-[184.35px]">
          {lastArticle.title}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs font-DanaDemiBold">{lastArticle.date}</span>
          <svg className="w-6 h-6 text-blue-600">
            <use href="#left-arrow"></use>
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default LastBlogBox;
