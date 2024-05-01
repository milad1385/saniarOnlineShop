import React, { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import { getAllSearchParam, getSearchParam } from "../../Utils/Funcs/utils";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCategoryPro from "../../Hooks/AdminPanel/Product/useCategoryPro";
import useGetAll from "../../Hooks/AdminPanel/Category/useGetAll";
function MobileFilter({ isShow, onShow }) {
  const queryStrings = getAllSearchParam("category");
  const startPrice = getSearchParam("startPrice");
  const endPrice = getSearchParam("endPrice");
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const [value, setValue] = useState([
    startPrice ? startPrice : 50000,
    endPrice ? endPrice : 70000000,
  ]);

  const handleChangeBox = async (category, e) => {
    if (e.target.checked) {
      searchParam.append("category", category);
      setSearchParam(searchParam);
    } else {
      searchParam.delete("category", category);
      setSearchParam(searchParam);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (value[0] !== 50000 && value[1] !== 25000000) {
        setSearchParam(
          (prev) => {
            prev.set("startPrice", value[0]);
            prev.set("endPrice", value[1]);
            return prev;
          },
          { replace: true }
        );
      }
    }, 1000);
  }, [value]);
  return (
    <div
      className={`bg-white  fixed md:hidden transition-all min-h-screen overflow-y-auto
      z-50 ${
        isShow ? "top-0" : "top-[800px]"
      } inset-0 rounded-t-lg`}
    >
      <div className="flex items-center justify-between bg-gray-100 py-4 px-4">
        <div
          className="flex items-center gap-x-1.5"
          onClick={() => onShow(false)}
        >
          <svg className="w-5 h-5 text-blue-600">
            <use href="#x-circule"></use>
          </svg>
          <span className="font-DanaDemiBold text-lg">فیلتر ها</span>
        </div>
        <div className="flex items-center gap-x-1">
          <span
            className="text-red-600"
            onClick={() => {
              onShow(false);
              navigate("/products");
            }}
          >
            حذف فیلتر ها
          </span>
          <svg className="w-5 h-5 text-red-600">
            <use href="#trash"></use>
          </svg>
        </div>
      </div>
      <div className="relative">
        <div className="px-4">
          <h3 className="font-DanaDemiBold text-lg border-b-2 border-b-gray-200 py-2">
            دسته بندی
          </h3>
          <div className="mt-2.5 space-y-3">
            <div class="mt-2.5 space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    class="text-lg"
                    value="mobile"
                    onChange={(e) => handleChangeBox("mobile", e)}
                    checked={queryStrings.includes("mobile") ? true : false}
                  />{" "}
                  <span class="font-DanaMedium mt-1">موبایل</span>
                  <svg class="w-5 h-5">
                    <use href="#mobile"></use>
                  </svg>
                </div>
                <div>(27)</div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    class="text-lg"
                    value="airpod"
                    onChange={(e) => handleChangeBox("airpod", e)}
                    checked={queryStrings.includes("airpod") ? true : false}
                  />{" "}
                  <span class="font-DanaMedium mt-1">ایرپاد</span>
                  <svg class="w-5 h-5">
                    <use href="#music"></use>
                  </svg>
                </div>
                <div>(27)</div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    class="text-lg"
                    value="tablet"
                    onChange={(e) => handleChangeBox("tablet", e)}
                    checked={queryStrings.includes("tablet") ? true : false}
                  />{" "}
                  <span class="font-DanaMedium mt-1">تبلت</span>
                  <svg class="w-5 h-5">
                    <use href="#mobile"></use>
                  </svg>
                </div>
                <div>(27)</div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    class="text-lg"
                    value="lap-top"
                    onChange={(e) => handleChangeBox("lap-top", e)}
                    checked={queryStrings.includes("lap-top") ? true : false}
                  />{" "}
                  <span class="font-DanaMedium mt-1">لپ تاپ</span>
                  <svg class="w-5 h-5">
                    <use href="#laptop"></use>
                  </svg>
                </div>
                <div>(27)</div>
              </div>
            </div>
          </div>
          <h3 className="font-DanaDemiBold text-lg border-b-2 border-b-gray-200 pb-2 mt-6">
            قیمت
          </h3>
          <div className="my-4">
            <RangeSlider
              min={50000}
              max={70000000}
              value={value}
              onInput={setValue}
            />
          </div>
          <div className="flex items-center justify-between gap-x-4 mt-7">
            <div className="border py-1.5 bg-gray-100 rounded-md border-gray-400 flex items-center justify-between gap-x-7 w-[140px]  p-3">
              <span>از</span>
              <div className=" outline-none w-full text-left bg-gray-100">
                {value[0].toLocaleString()}
              </div>
            </div>
            <div className="border py-1.5 bg-gray-100 rounded-md border-gray-400 flex items-center justify-between gap-x-7 w-[140px] p-3">
              <span>تا</span>
              <div className=" outline-none w-full text-left bg-gray-100">
                {value[1].toLocaleString()}
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute -bottom-[295px] left-3 right-3 mx-auto rounded-md font-DanaMedium  bg-blue-600 text-white py-3"
          onClick={() => onShow(false)}
        >
          اعمال دسته بندی
        </button>
      </div>
    </div>
  );
}

export default MobileFilter;
