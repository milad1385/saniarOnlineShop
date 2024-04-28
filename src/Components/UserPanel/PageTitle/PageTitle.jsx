import React from "react";

function PageTitle({ title, icon, isBig }) {
  return (
    <div>
      <h3
        className={`font-DanaDemiBold text-sm md:text-xl  ${
          isBig ? "md:text-2xl" : "text-lg"
        } flex items-center gap-x-2`}
      >
        {icon && (
          <svg className="w-5 md:w-7 h-5 md:h-7 text-blue-600">
            <use href={`#${icon}`}></use>
          </svg>
        )}
        {title}
      </h3>
      <div className="h-[3px] bg-gray-200 my-2 relative">
        <div className="absolute inset-0 bg-blue-600 w-1/12"></div>
      </div>
    </div>
  );
}

export default PageTitle;
