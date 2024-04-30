import React from "react";
import ColorBox from "../ColorBox/ColorBox";
import { Link } from "react-router-dom";
import { isLogin } from "../../Utils/Funcs/utils";

function ProductBoxInfo({
  productCount,
  setColorChoose,
  colorChoose,
  product,
  basketInfo,
  onAdd,
  onInc,
  onDec,
  onDel,
  id,
  commentsLength,
  score,
}) {
  return (
    <div className="bg-white rounded-md shadow h-[485px]  w-[450px] hidden lg:block sticky top-0 px-4 py-3">
      {/* start header of box */}
      <div className="flex items-center justify-between">
        <div>
          <img
            src={`https://shoppingmilad.liara.run/uploads/covers/${product?.productInfo.images[0]}`}
            alt={product?.productInfo.images[0]}
            className="w-[90px] shrink-0"
          />
        </div>
        <p className="w-[204px] font-DanaDemiBold line-clamp-3">
          {product?.productInfo.longDesc}
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-3 mt-8">
        {product?.colors.map((color) => (
          <ColorBox
            colorCode={color.colorCode}
            colorName={color.colorName}
            colorChoose={colorChoose}
            setColorChoose={setColorChoose}
          />
        ))}
      </div>
      <div className="flex items-center gap-x-2 text-sm my-6">
        <span className="text-zinc-700 text-sm ">{commentsLength} دیدگاه</span>
        <span className="block w-[1.5px] h-5 bg-gray-200"></span>
        <div className="flex gap-x-1">
          <span className="text-sm  text-zinc-700">
            ({commentsLength}) {Math.ceil(score)}
          </span>
          <svg className="w-5 h-5 text-yellow-400">
            <use href="#star"></use>
          </svg>
        </div>
      </div>
      <div className="flex  gap-x-2 my-6">
        <svg className="w-5 h-5 text-green-500">
          <use href="#check"></use>
        </svg>
        <p className="font-DanaMedium text-zinc-600">
          گارانتی اصالت و سلامت فیزیکی کالا
        </p>
      </div>
      <div className="flex items-center justify-between my-4">
        {product?.productInfo.off !== 0 && (
          <>
            <span className="text-gray-400 font-DanaDemiBold text-lg line-through">
              {product?.productInfo.price.toLocaleString("fa")} تومان
            </span>
            <span className="block w-[1.5px] h-6 bg-gray-400"></span>
          </>
        )}
        {product?.productInfo.off ? (
          <span className="text-blue-600 text-lg font-DanaDemiBold">
            {(
              product?.productInfo.price -
              (product?.productInfo.price * product?.productInfo.off) / 100
            ).toLocaleString("fa")}{" "}
            تومان
          </span>
        ) : (
          <span className="text-blue-600 text-lg font-DanaDemiBold">
            {product?.productInfo.price.toLocaleString("fa")} تومان
          </span>
        )}
      </div>
      {basketInfo?.length > 0 && (
        <div className="flex-center gap-x-2 my-5">
          <div
            onClick={onInc}
            className="w-10 h-[30px] bg-blue-600 text-white flex-center rounded-r-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer"
          >
            <span className="mt-1">+</span>
          </div>
          <div className="bg-white w-[50px] h-[30px] flex-center font-DanaDemiBold rounded-md shadow">
            {productCount}
          </div>
          {basketInfo?.length && basketInfo?.[0]?.qty > 1 ? (
            <div
              onClick={onDec}
              className="w-10 h-[30px] bg-blue-600 text-white flex-center rounded-l-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer"
            >
              <span className="mt-1">-</span>
            </div>
          ) : (
            <div
              onClick={async () => await onDel(id)}
              className="w-10 h-[30px] bg-blue-600 text-white flex-center rounded-l-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer"
            >
              <span className="mt-1">
                <svg className="w-5 h-5 mb-1">
                  <use href="#trash"></use>
                </svg>
              </span>
            </div>
          )}
        </div>
      )}
      {isLogin() === true ? (
        <div>
          {!basketInfo?.length ? (
            <button
              onClick={onAdd}
              className={`flex-center ${
                !basketInfo?.length ? "mt-16" : ""
              } w-full text-sm md:text-base gap-x-1 bg-blue-600 text-white px-6 py-2 rounded-md shadow-blue`}
            >
              <svg className="w-6 h-6">
                <use href="#shop-bag"></use>
              </svg>
              خرید <span className="">کالا</span>
            </button>
          ) : (
            <button
              onClick={onAdd}
              className="flex-center w-full text-sm md:text-base gap-x-1 bg-amber-500 text-white px-6 py-2 rounded-md shadow"
            >
              <svg className="w-6 h-6">
                <use href="#shop-bag"></use>
              </svg>
              اضافه شده
            </button>
          )}
        </div>
      ) : (
        <Link
          to={"/login"}
          className={`flex-center text-sm md:text-base gap-x-1 bg-blue-600 text-white px-6 py-2 rounded-md shadow-blue`}
        >
          <svg className="w-6 h-6">
            <use href="#arrow-left-on-rectangle"></use>
          </svg>
          وارد شوید
        </Link>
      )}
    </div>
  );
}

export default ProductBoxInfo;
