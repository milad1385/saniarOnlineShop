import React from "react";

function PageTitle({ title, icon }) {
  return (
    <div>
      <h3 class="font-DanaDemiBold text-base md:text-lg flex items-center gap-x-2">
        {icon && (
          <svg class="w-5 md:w-7 h-5 md:h-7 text-blue-600">
            <use href={`#${icon}`}></use>
          </svg>
        )}
        {title}
      </h3>
      <div class="h-[3px] bg-gray-200 my-2 relative">
        <div class="absolute inset-0 bg-blue-600 w-1/12"></div>
      </div>
    </div>
  );
}

export default PageTitle;
