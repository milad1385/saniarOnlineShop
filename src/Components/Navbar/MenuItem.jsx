import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ menu }) {
  return (
    <li className="pb-2 group">
      <Link
        to={`/category-products/${menu.link}`}
        className="flex relative items-center line-clamp-1 hover:text-blue-600 gap-x-0.5 text-sm lg:text-sm xl:text-base"
      >
        {menu.name}
        {menu.sub.length > 0 && (
          <svg className="w-5 h-5">
            <use href="#chevron-down-mini"></use>
          </svg>
        )}
      </Link>
      {menu.sub.length > 0 && (
        <div className="absolute group-hover:visible group-hover:opacity-100 text-gray-700 bg-white px-4 py-3 w-60 top-[67px] rounded-md transition-all shadow opacity-0 invisible space-y-4 border-b-[3.5px] border-b-blue-600">
          {menu.sub.map((subMenu) => (
            <Link
              key={subMenu._id}
              to={`/product/${subMenu.link}`}
              className="nav-link-sub line-clamp-1"
            >
              {subMenu.name}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

export default MenuItem;
