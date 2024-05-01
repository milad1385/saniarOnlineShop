import React, { useEffect, useState } from "react";
import TitleCat from "../TitleCat/TitleCat";
import useGetAllPro from "../../Hooks/AdminPanel/Product/useGetAllPro";
import Slide from "./Slide";
import useFeatures from "../../Hooks/AdminPanel/Product/useFeatures";
import { Link } from "react-router-dom";

function WonderFullSlides() {
  const { data: products } = useGetAllPro();
  const [mainProduct, setMainProduct] = useState({});
  const { data: features } = useFeatures(mainProduct?._id);
  console.log(features);
  useEffect(() => {
    setMainProduct(products?.[0]);
  }, [products]);

  console.log(mainProduct);

  return (
    <div className="container pb-4 md:pb-10">
      <TitleCat main={"شگفت انگیز"} desc={"اسلایدر"} />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-y-8 md:gap-x-8 ">
        <div className="col-span-2 bg-white  rounded-md shadow-sm p-3.5 flex flex-col lg:flex-row gap-x-5">
          <div className="flex">
            <img
              src={`https://shoppingmilad.liara.run/uploads/covers/${mainProduct?.images?.[0]}`}
              alt={mainProduct?.title}
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
                {mainProduct?.title}
              </h3>
              {mainProduct?.off > 0 && (
                <div className="bg-red-200 text-red-600 text-sm p-2 rounded-lg mt-3 lg:mt-0">
                  {mainProduct?.off} % تخفیف
                </div>
              )}
            </div>
            <div className="border-b border-b-gray-300 pb-2 md:min-h-[125px]">
              <p className="text-gray-500 text-sm/[28px] md:text-base/[30px] w-auto lg:w-[608px]">
                {mainProduct?.longDesc}
              </p>
            </div>
            <div className="flex md:items-center justify-between flex-col md:flex-row py-2.5 font-DanaDemiBold border-b border-b-gray-300 text-sm gap-y-2">
              {features?.slice(0, 5).map((feature) => (
                <span key={feature._id}>{feature.featureValue}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2.5 flex-wrap">
              <div>
                <div className="flex items-center gap-x-1">
                  <span className="text-blue-600 text-2xl font-DanaDemiBold">
                    {(
                      mainProduct?.price -
                      (mainProduct?.price * mainProduct?.off) / 100
                    ).toLocaleString("fa")}
                  </span>
                  <span className="text-sm font-DanaMedium">هزار تومان</span>
                  {mainProduct?.off > 0 && (
                    <span className="line-through text-gray-400 text-sm font-DanaDemiBold">
                      {mainProduct?.price.toLocaleString("fa")}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <Link
                  to={`/product/${mainProduct?.link}`}
                  className="bg-blue-600 font-DanaMedium flex items-center justify-center gap-x-1 text-white shadow-blue p-2 rounded-md my-3 md:mt-0"
                >
                  <svg className="w-6 h-6">
                    <use href="#shop-bag"></use>
                  </svg>
                  خرید محصول
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-h-[350px] md:max-h-[396.6px] overflow-auto rounded-md  space-y-[20px] px-2">
          {products?.map((product) => (
            <Slide
              key={product._id}
              {...product}
              info={product}
              main={mainProduct}
              onChange={setMainProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WonderFullSlides;
