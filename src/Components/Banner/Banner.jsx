import React, { useState } from "react";
function Banner() {
  
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div
        className={`bg-gradient-to-l from-blue-600 to-blue-500  text-white w-full flex items-centers py-3 md:p-5 ${
          isShow && "hidden"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div class="flex-center shrink-0 w-[30px] h-[30px] border border-zinc-300 rounded-full">
              <div class="flex-center w-5 h-5 border border-zinc-300 rounded-full">
                <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>
            </div>
            <p className="text-sm md:text-lg font-DanaMedium">
              تخفیف شگفت انگیز این کمپین رو از دست نده{" "}
              <span className="text-base md:text-4xl">🙌</span>
            </p>
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
