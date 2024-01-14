import React from "react";
import Brand from "../Brand/Brand";

function Componies() {
  return (
    <div className="bg-blue-600 mt-5 shadow py-[30px]">
      <div className="container flex items-center justify-between flex-wrap">
        <div className="flex flex-col gap-y-3 md:gap-y-5 text-white border-r-[4px] border-r-orange-500 pr-3">
          <span className="text-2xl font-DanaDemiBold">بیش از 5000 محصول</span>
          <span>برترین برندهای اصلی و خارجی</span>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5 mt-4 md:mt-0">
          <Brand image={"brand1-1.png"} />
          <Brand image={"brand1-2.png"} />
          <Brand image={"brand1-3.png"} />
          <Brand image={"brand1-4.png"} />
          <Brand image={"brand1-5.png"} />
          <Brand image={"brand1-6.png"} />
        </div>
      </div>
    </div>
  );
}

export default Componies;
