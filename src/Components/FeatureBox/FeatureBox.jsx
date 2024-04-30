import React from "react";

function FeatureBox({ feature }) {
  return (
    <div key={feature._id} className="flex gap-x-4 bg-white shadow p-[16px] rounded-lg">
      <img
        src={`https://shoppingmilad.liara.run/uploads/covers/${feature.logo}`}
        alt={feature.title}
        className="w-[50px]"
      />
      <div className="flex flex-col">
        <span className="font-DanaDemiBold text-sm md:text-base">{feature.title}</span>
        <span className="text-xs md:text-sm mt-2">{feature.desc}</span>
      </div>
    </div>
  );
}

export default FeatureBox;
