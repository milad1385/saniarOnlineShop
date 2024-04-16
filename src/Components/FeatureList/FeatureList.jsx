import React, { useEffect, useState } from "react";
import FeatureItem from "../FeatureItem/FeatureItem";

function FeatureList({ features }) {
  const [isMore, setIsMore] = useState(false);
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
          {isMore
            ? features?.map((feature) => <FeatureItem key={feature._id} feature={feature} />)
            : features
                ?.slice(0, 4)
                .map((feature) => <FeatureItem feature={feature} />)}

          <div className="flex items-center justify-center show-container relative">
            {isMore ? (
              <div
                className="bg-blue-600 w-[123px] md:w-[155px] text-white flex items-center justify-between select-none gap-x-2 p-2 rounded-md md:cursor-pointer"
                onClick={() => {
                  setIsMore(false);
                  window.scroll(0, window.innerWidth < 800 ? 1735 : 1250);
                }}
              >
                <span className="text-sm md:text-lg">نمایش کمتر</span>
                <svg className="w-6 md:w-8 h-6 md:h-8">
                  <use href="#eye-slash"></use>
                </svg>
              </div>
            ) : (
              <div
                className="bg-blue-600 w-[123px] md:w-[155px] text-white flex items-center justify-between select-none gap-x-2 p-2 rounded-md md:cursor-pointer"
                onClick={() => {
                  setIsMore(true);
                }}
              >
                <span className="text-sm md:text-lg">نمایش بیشتر</span>
                <svg className="w-6 md:w-8 h-6 md:h-8">
                  <use href="#eye"></use>
                </svg>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default FeatureList;
