import React from "react";
import ColorBox from "../ColorBox/ColorBox";

function ProductBoxInfo({
  productCount,
  setProductCount,
  setColorChoose,
  colorChoose,
  product,
}) {
  return (
    <div className="bg-white rounded-md shadow h-[525px]  w-[450px] hidden lg:block sticky top-0 px-4 py-3">
      {/* start header of box */}
      <div className="flex items-center justify-between">
        <div>
          <img
            src={`http://localhost:3001/uploads/covers/${product?.images[0]}`}
            alt={product?.images[0]}
            className="w-[90px] shrink-0"
          />
        </div>
        <p className="w-[204px] font-DanaDemiBold line-clamp-3">
          {product?.longDesc}
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-3 mt-4">
        <ColorBox
          colorCode={"blue"}
          colorName={"آبی"}
          colorChoose={colorChoose}
          setColorChoose={setColorChoose}
        />
        <ColorBox
          colorCode={"red"}
          colorName={"قرمز"}
          colorChoose={colorChoose}
          setColorChoose={setColorChoose}
        />
        <ColorBox
          colorCode={"green"}
          colorName={"سبز"}
          colorChoose={colorChoose}
          setColorChoose={setColorChoose}
        />
        <ColorBox
          colorCode={"yellow"}
          colorName={"زرد"}
          colorChoose={colorChoose}
          setColorChoose={setColorChoose}
        />
        <ColorBox
          colorCode={"black"}
          colorName={"مشکی"}
          colorChoose={colorChoose}
          setColorChoose={setColorChoose}
        />
      </div>
      <div className="flex items-center gap-x-2 my-4">
        <img
          src="/images/category/brand1-1.png"
          className="w-[100px]"
          alt="category"
        />
        <p>شیائومی</p>
      </div>
      <div className="flex items-center gap-x-2 text-sm my-4">
        <span className="text-zinc-700 text-sm ">16 دیدگاه</span>
        <span className="block w-[1.5px] h-5 bg-gray-200"></span>
        <div className="flex gap-x-1">
          <span className="text-sm  text-zinc-700">(17) 4.5</span>
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
        {product?.off !== 0 && (
          <>
            <span className="text-gray-400 font-DanaDemiBold text-lg line-through">
              {product?.price.toLocaleString("fa")} تومان
            </span>
            <span className="block w-[1.5px] h-6 bg-gray-400"></span>
          </>
        )}
        {product?.off ? (
          <span className="text-blue-600 text-lg font-DanaDemiBold">
            {(
              product?.price -
              (product?.price * product?.off) / 100
            ).toLocaleString("fa")}{" "}
            تومان
          </span>
        ) : (
          <span className="text-blue-600 text-lg font-DanaDemiBold">
            {product?.price} تومان
          </span>
        )}
      </div>
      <div className="flex items-center justify-center my-6">
        <div className="flex items-center gap-x-2">
          <div
            className="w-10 h-[30px] select-none bg-blue-600 text-white flex-center rounded-r-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer"
            onClick={() => setProductCount((prevCount) => prevCount + 1)}
          >
            <span className="mt-1 select-none">+</span>
          </div>
          <div className="bg-white w-[50px] h-[30px] flex-center font-DanaDemiBold rounded-md shadow">
            {productCount}
          </div>
          <div
            className="w-10 h-[30px] select-none bg-blue-600 text-white flex-center rounded-l-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer"
            onClick={() => {
              if (productCount !== 1) {
                setProductCount((prevCount) => prevCount - 1);
              }
            }}
          >
            <span className="mt-1 select-none">-</span>
          </div>
        </div>
      </div>
      <button className="flex items-center justify-center w-full gap-x-1 bg-blue-600 text-white px-6 py-2 rounded-md shadow-blue">
        <svg className="w-6 h-6">
          <use href="#shop-bag"></use>
        </svg>
        خرید کالا
      </button>
    </div>
  );
}

export default ProductBoxInfo;
