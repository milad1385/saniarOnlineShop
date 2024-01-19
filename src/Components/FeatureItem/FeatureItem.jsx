import React from "react";

function FeatureItem() {
  return (
    <li className="flex items-center gap-x-2 pr-4 border-r-2 border-r-gray-200">
      <span className="py-2 text-gray-500 w-[180px]">قابلیت پخش موسیقی</span>
      <span className="block bg-gray-200 w-full py-[18px] px-[14px] rounded-lg text-gray-500">
        دارد
      </span>
    </li>
  );
}

export default FeatureItem;
