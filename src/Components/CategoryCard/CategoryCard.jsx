import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({category}) {
  return (
    <>
      <div className="bg-white flex items-center justify-between hover:-translate-y-[6px] p-3 md:p-4 rounded-md shadow-md transition-all">
        <div>
          <img src={`http://localhost:3001/uploads/covers/${category.image}`} className="w-[130px]" />
        </div>
        <div className="flex items-center flex-col gap-y-4">
          <Link to={`/${category.link}`} className="font-DanaMedium">{category.title}</Link>
          <Link to={`/${category.link}`} className="flex items-center justify-between gap-x-1 cursor-pointer text-sm bg-gray-200 shadow px-2.5 py-1.5 border border-gray-300 hover:bg-white transition-colors rounded-md">
            مشاهده
            <svg className="w-5 h-5 text-blue-600">
              <use href="#arrow-d"></use>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
