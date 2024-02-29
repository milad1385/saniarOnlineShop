import React from "react";

function FeatureItem({feature}) {
  return (
    <li className="flex items-center gap-x-2 pr-4 border-r-2 border-r-gray-200">
      <span className="py-2 text-gray-500 w-[180px] text-xs md:text-base">{feature.featureName}</span>
      <span className="block text-xs md:text-base bg-gray-200 w-full py-3 md:py-[18px] px-[14px] rounded-lg text-gray-500">
        {feature.featureValue}
      </span>
    </li>
  );
}

export default FeatureItem;
