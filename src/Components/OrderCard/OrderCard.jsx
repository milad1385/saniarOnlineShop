import React from "react";
import useDeleteBasket from "../../Hooks/basket/useDelete";
import useInc from "../../Hooks/basket/useInc";
import useDec from "../../Hooks/basket/useDec";

function OrderCard({ product, colorName, colorCode, qty, price }) {
  const { mutateAsync: deleteBasket } = useDeleteBasket();
  const { mutateAsync: increaseBasket } = useInc();
  const { mutateAsync: decreaseBasket } = useDec();
  return (
    <div className="bg-white relative rounded-md shadow p-5 md:p-3 flex flex-col md:flex-row md:items-start justify-center md:justify-between">
      <div className="flex flex-col md:flex-row gap-x-8">
        <img
          src={`https://shoppingmilad.liara.run/uploads/covers/${product.images[0]}`}
          alt={product.title}
          className="w-[150px] md:w-[125px] h-[150px] md:h-[125px] mx-auto md:mx-0"
        />
        <div>
          <div className="flex items-start gap-x-3 py-4">
            <p className="font-DanaDemiBold mx-auto md:mx-0">{product.title}</p>
            {product?.off > 0 && (
              <div className="bg-blue-200 text-sm px-2 py-0.5 text-blue-600 block rounded-md absolute md:relative">
                <span className="mt-px block">{product.off}%</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center md:justify-start gap-x-3 md:gap-x-5 mt-2">
            <div className="text-xs md:text-sm font-DanaMedium text-gray-600 flex items-center gap-x-2">
              <svg className="w-6 h-6">
                <use href="#color"></use>
              </svg>
              <span> رنگ : </span>
              <div className="flex items-center justify-center md:justify-end gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer">
                <div
                  className="w-5 h-5 shrink-0 rounded-full flex-center"
                  style={{ backgroundColor: colorCode }}
                ></div>
                <span className="line-clamp-1">{colorName}</span>
              </div>
              <span className="block bg-gray-400 sepreator h-4 mr-2"></span>
            </div>
            <div className="text-xs md:text-sm font-DanaMedium text-gray-600 flex items-center gap-x-2">
              <svg className="w-6 h-6">
                <use href="#square"></use>
              </svg>
              <span> تعداد : </span>
              <span className="w-[25px] md:w-auto block">
                {qty} <span className="hidden md:inline-block">عدد</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center md:items-end justify-between flex-col w-full md:w-auto">
        <button
          className="bg-red-200 rounded-md p-2 absolute top-3 left-3"
          onClick={async () => await deleteBasket(product._id)}
        >
          <svg className="w-5 h-5 text-red-600">
            <use href="#trash"></use>
          </svg>
        </button>
        <div className="mt-[2rem] md:mt-[5.5rem]">
          <div className="flex flex-col md:flex-row justify-center md:items-center gap-5">
            <div className="text-sm md:text-base flex items-center justify-center gap-x-4">
              {product?.off > 0 && (
                <>
                  <span className="text-gray-400 font-DanaDemiBold line-through">
                    {product.price.toLocaleString("fa")} تومان
                  </span>
                  <span className="block w-[1.5px] h-6 bg-gray-400"></span>
                </>
              )}
              <span className="text-blue-600 font-DanaDemiBold">
                {price.toLocaleString("fa")} تومان
              </span>
            </div>
            <div className="flex items-center gap-x-2 justify-center md:justify-end">
              <div
                onClick={async () => await increaseBasket(product._id)}
                className="w-10 h-[30px] bg-blue-600 text-white flex-center rounded-r-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer"
              >
                <span className="mt-1">+</span>
              </div>
              <div className="bg-white w-[50px] text-sm md:text-base h-[30px] flex-center font-DanaDemiBold rounded-md shadow">
                {qty}
              </div>
              <div
                onClick={async () => await decreaseBasket(product._id)}
                className="w-10 h-[30px] bg-blue-600 text-white flex-center rounded-l-full font-DanaMedium shadow-blue cursor-default md:cursor-pointer"
              >
                <span className="mt-1">-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
