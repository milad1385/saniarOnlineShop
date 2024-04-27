import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ links }) {
  return (
    <div className="breadcrumb bg-white my-6  rounded-md shadow p-4 py-5">
      <div className="flex items-center gap-x-2 w-[372px] md:w-[450px]">
        {links.map((link) => (
          <Link key={link.id} to={link.to} className={`flex items-center gap-x-1 text-sm lg:text-base ${link.id !== links.length ? 'text-zinc-700' :'text-blue-600 font-DanaMedium'} `}>
            {link.name}
            {link.id !== links.length ? (
              <svg className="w-3.5 md:w-4 h-3.5 md:h-4">
                <use href="#chevron-left"></use>
              </svg>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BreadCrumb;
