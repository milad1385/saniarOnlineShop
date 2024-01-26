import React from "react";

function TopBar() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <div className="w-16 h-16 flex-center bg-gray-300 shadow rounded-full">
            <img src="/images/user.png" className="w-14 h-14" alt="" />
          </div>
          <div>
            <h3 className="font-Lalezar text-lg">میلاد سلامیان</h3>
            <h6 className="font-Lalezar text-base text-gray-500">
              مدیریت اصلی
            </h6>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="bg-white pr-3 pl-1.5 py-1.5 rounded-md shadow-sm flex items-center justify-between ">
            <input
              type="text"
              placeholder="جستجو کنید..."
              className="outline-none border-none bg-transparent font-DanaDemiBold"
            />
            <button className="bg-blue-600 text-white rounded-md p-1">
              <svg className="w-6 h-6">
                <use href="#magni-glass"></use>
              </svg>
            </button>
          </div>
         <svg className="w-10 h-10 bg-blue-600 shadow-blue text-white rounded-md p-1.5">
            <use href="#bell"></use>
         </svg>
        </div>
      </div>
    </>
  );
}

export default TopBar;
