import React from "react";
import { Link } from "react-router-dom";

function ArticleBox({ image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg">
      <Link to={''}>
        <img
          src={`/images/blog/${image}`}
          alt="blog-4.jpg"
          className="w-full rounded-2xl"
        />
      </Link>
      <div className="flex items-center justify-between mt-1.5 p-2.5">
        <div className="flex items-center gap-x-1.5 text-sm font-DanaDemiBold">
          <svg className="w-5 h-5">
            <use href="#tag"></use>
          </svg>
          <span>آموزشی</span>
        </div>
        <span className="flex items-center gap-x-1.5">
          <svg className="w-5 h-5">
            <use href="#clock"></use>
          </svg>
          <span className="font-DanaDemiBold text-xs mt-1">1 خرداد 1402</span>
        </span>
      </div>
      <Link to={''} className="font-DanaDemiBold line-clamp-1 mt-1.5 p-2.5">
        لپ تاپ مک بوک پرو چیست ؟ خوبه ؟
      </Link>
    </div>
  );
}

export default ArticleBox;
