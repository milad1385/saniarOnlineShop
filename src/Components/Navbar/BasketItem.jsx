import React from "react";
import useDeleteBasket from "../../Hooks/basket/useDelete";
import useInc from "../../Hooks/basket/useInc";
import useDec from "../../Hooks/basket/useDec";

function BasketItem({ product, colorName, colorCode, qty, price }) {
  const { mutateAsync: deleteBasket } = useDeleteBasket();
  const { mutateAsync: increaseBasket } = useInc();
  const { mutateAsync: decreaseBasket } = useDec();
  return (
    <div className="pb-4">
      <div className="flex py-4 gap-x-2">
        <img
          className="w-20 h-20"
          src={`http://localhost:3001/uploads/covers/${product.images[0]}`}
          alt={product.title}
        />
        <div className="flex flex-col justify-between">
          <h3 className="text-zinc-700 dark:text-white font-DanaMedium text-sm line-clamp-2">
            {product.title}
          </h3>
          <div className="">
            {product.off > 0 && (
              <span className="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium">
                {(qty * ((price * product.off) / 100)).toLocaleString("fa")}{" "}
                تومان تخفیف
              </span>
            )}
            <div className="text-zinc-700 dark:text-white font-DanaDemiBold text-xs md:text-base">
              {(qty * price - (price * product.off) / 100).toLocaleString("fa")}
              <span className="text-xs font-Dana tracking-tight">تومان</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div
            className="bg-blue-600 w-7 h-7 flex-center text-white rounded-full "
            onClick={async () => await increaseBasket(product._id)}
          >
            <span className="mt-[3px]">+</span>
          </div>
          <div className="font-DanaDemiBold w-[7px] text-sm">{qty}</div>
          <div
            className="bg-blue-600 w-7 h-7 flex-center text-white rounded-full "
            onClick={async () => await decreaseBasket(product._id)}
          >
            <span className="mt-[3px]">-</span>
          </div>
        </div>
        <div
          className="bg-blue-600 text-white p-1 rounded-md shadow-blue"
          onClick={async () => await deleteBasket(product._id)}
        >
          <svg className="w-5 h-5">
            <use href="#trash"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
