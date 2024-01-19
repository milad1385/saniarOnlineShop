import React from "react";
import FeatureItem from "../FeatureItem/FeatureItem";

function FeatureList() {
  return (
    <div className="mt-6 flex flex-col gap-y-12">
      <div>
        <h4 className="flex  gap-x-2 font-DanaDemiBold">
          <svg className="w-5 h-5">
            <use href="#page"></use>
          </svg>
          مشخصات کلی
        </h4>
        <ul className="features font-DanaMedium space-y-5 mt-5">
          <FeatureItem/>
          <FeatureItem/>
          <FeatureItem/>
          <FeatureItem/>
          <FeatureItem/>
          <FeatureItem/>
        </ul>
      </div>
    </div>
  );
}

export default FeatureList;
