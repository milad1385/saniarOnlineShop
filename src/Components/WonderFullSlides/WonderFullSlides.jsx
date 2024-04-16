import React, { useEffect, useState } from "react";
import TitleCat from "../TitleCat/TitleCat";
import useGetAllPro from "../../Hooks/AdminPanel/Product/useGetAllPro";
import Slide from "./Slide";

function WonderFullSlides() {
  const { data: products } = useGetAllPro();

  return (
    <div className="container pb-4 md:pb-10">
      <TitleCat main={"شگفت انگیز"} desc={"اسلایدر"} />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-y-8 md:gap-x-8 ">
        <div className="col-span-2 bg-white  rounded-md shadow-sm p-3.5 flex flex-col lg:flex-row gap-x-5">
          <div className="flex">
            <img
              src={`http://localhost:3001/uploads/covers/${products?.[0].images[0]}`}
              alt={products?.[0].title}
              className="w-[292px] h-auto md:h-[304px] shrink-0 mx-auto"
            />
          </div>
          <div className="">
            <div className="flex items-center justify-center md:justify-start gap-x-2.5 mx-auto lg:mx-0">
              <div className="flex items-center flex-col">
                <div className="bg-red-500 text-white rounded-md w-10 h-10 flex items-center justify-center text-sm font-DanaDemiBold">
                  53
                </div>
                <span className="text-sm font-DanaDemiBold mt-2">ثانیه</span>
              </div>
              <div className="flex items-center flex-col">
                <div className="bg-gray-200 text-black rounded-md w-10 h-10 flex items-center justify-center text-sm font-DanaDemiBold">
                  45
                </div>
                <span className="text-sm font-DanaDemiBold mt-2">دقیقه</span>
              </div>
              <div className="flex items-center flex-col">
                <div className="bg-gray-200 text-black rounded-md w-10 h-10 flex items-center justify-center text-sm font-DanaDemiBold">
                  12
                </div>
                <span className="text-sm font-DanaDemiBold mt-2">ساعت</span>
              </div>
              <div className="flex items-center flex-col">
                <div className="bg-gray-200 text-black rounded-md w-10 h-10 flex items-center justify-center text-sm font-DanaDemiBold">
                  1
                </div>
                <span className="text-sm font-DanaDemiBold mt-2">روز</span>
              </div>
            </div>
            <div className="flex items-start md:items-center md:justify-between flex-col xl:flex-row gap-x-5 my-5">
              <h3 className="font-DanaDemiBold text-lg line-clamp-1 lg:line-clamp-2">
                {products?.[0].title}
              </h3>
              <div className="bg-red-200 text-red-600 text-sm p-2 rounded-lg mt-3 lg:mt-0">
                40 % تخفیف
              </div>
            </div>
            <div className="border-b border-b-gray-300 pb-2">
              <p className="text-gray-500 text-sm/[28px] md:text-base/[30px] w-auto lg:w-[608px]">
                برخی از شرکت‌های فعال در زمینه گوشی‌های هوشمند، تا به امروز
                توانسته‌اند گوشی‌های هوشمند انعطاف‌پذیر یا همان تاشو را روانه
                بازار کنند. یکی از این شرکت‌های موفق، هوآوی است که P50 Pocket
                Premium Edition به عنوان یکی از جدید‌ترین گوشی‌ خاص این شرکت با
                صفحه‌نمایشی تاشو معرفی شده است. ..
              </p>
            </div>
            <div className="flex md:items-center justify-between flex-col md:flex-row py-2.5 font-DanaDemiBold border-b border-b-gray-300 text-sm gap-y-2">
              <span>صفحه نمایش 27 اینج </span>
              <span>حافظه داخلی یک ترابایت</span>
              <span>مخصوص بازی</span>
              <span>پردازنده گرافیکی nvidia</span>
            </div>
            <div className="flex items-center justify-between pt-2.5 flex-wrap">
              <div>
                <div className="flex items-center gap-x-1">
                  <span className="text-blue-600 text-2xl font-DanaDemiBold">
                    958,000
                  </span>
                  <span className="text-sm font-DanaMedium">هزار تومان</span>
                  <span className="line-through text-gray-400 text-sm font-DanaDemiBold">
                    1,500,000
                  </span>
                </div>
              </div>
              <div>
                <button className="bg-blue-600 font-DanaMedium flex items-center justify-center gap-x-1 text-white shadow-blue p-2 rounded-md my-3 md:mt-0">
                  <svg className="w-6 h-6">
                    <use href="#shop-bag"></use>
                  </svg>
                  خرید محصول
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-h-[350px] md:max-h-[396.6px] overflow-auto rounded-md  space-y-[20px] px-2">
          {products?.map((product) => (
            <Slide key={product._id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WonderFullSlides;
