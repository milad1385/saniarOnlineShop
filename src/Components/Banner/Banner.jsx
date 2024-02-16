import React, { useEffect, useState } from "react";
import useGetActiveBaner from "../../Hooks/AdminPanel/Baner/useGetActiveBaner";
function Banner() {
  const { data: baner, isLoading } = useGetActiveBaner();
  const [isShow, setIsShow] = useState(false);
  console.log(baner);
  return (
    <>
      <div
        className={`bg-gradient-to-l from-blue-600 to-blue-500  text-white w-full flex items-centers py-3 md:p-5 ${
          baner?.isActive ? "block" : "hidden"
        } ${isShow && "hidden"}`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="flex-center shrink-0 w-[30px] h-[30px] border border-zinc-300 rounded-full">
              <div className="flex-center w-5 h-5 border border-zinc-300 rounded-full">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>
            </div>
            <p className="text-xs md:text-lg font-DanaMedium">{baner?.title}</p>
          </div>
          <span onClick={() => setIsShow(true)}>
            <svg className="w-5 md:w-6 h-5 md:h-6">
              <use href="#x-mark"></use>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}

export default Banner;
