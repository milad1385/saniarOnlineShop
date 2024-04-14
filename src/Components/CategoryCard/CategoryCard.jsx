import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({category}) {
  return (
    <>
      <div className="bg-white flex items-center justify-between md:hover:-translate-y-[6px] p-3 md:p-4 rounded-md shadow-md transition-all">
        <div>
          <img src={`http://localhost:3001/uploads/covers/${category.image}`} className="w-[100px] md:w-[130px]" />
        </div>
        <div className="flex items-center flex-col gap-y-4">
          <Link to={`/category-products/${category.link}`} className="font-DanaMedium text-sm md:text-base">{category.title}</Link>
          <Link to={`/category-products/${category.link}`}  className="flex items-center justify-between gap-x-2 cursor-pointer text-xs md:text-sm bg-gray-200 shadow px-2.5 py-1.5 border border-gray-300 hover:bg-white transition-colors rounded-md">
            مشاهده
            <svg className="w-4 md:w-5 h-4 md:h-5 text-blue-600">
              <use href="#arrow-d"></use>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
