import React from "react";

function FeatureBox({title , desc , image}) {
  return (
    <div className="flex gap-x-4 bg-white shadow p-[16px] rounded-lg">
      <img
        src={`/images/category/${image}`}
        alt="history"
        className="w-[50px]"
      />
      <div className="flex flex-col">
        <span className="font-DanaDemiBold">{title}</span>
        <span className="text-sm mt-2">{desc}</span>
      </div>
    </div>
  );
}

export default FeatureBox;
