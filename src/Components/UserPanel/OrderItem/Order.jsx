import React from "react";
import { Link } from "react-router-dom";

function Order({ products, orderCode, totalPrice, createdAt, _id, status }) {
  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          {status === 2 && (
            <svg className="w-6 md:w-8 h-6 md:h-8 text-green-600">
              <use href="#check"></use>
            </svg>
          )}

          {status !== 2 && (
            <span className="text-sm md:text-2xl">
              {status === 0 && "🧐"}
              {status === 1 && "🚚"}
            </span>
          )}
          <span className="font-DanaDemiBold text-sm md:text-base">
            {status === 0 && "در حال بررسی"}
            {status === 1 && "در حال ارسال"}
            {status === 2 && "تحویل داده شده"}
          </span>
        </div>
        <Link to={`/my-account/order-detail/${_id}`}>
          <svg className="w-6 md:w-8 h-6 md:h-8">
            <use href="#left-arrow"></use>
          </svg>
        </Link>
      </div>
      <div className="flex items-center justify-between md:justify-start gap-x-8 text-xs md:text-sm text-gray-600 font-DanaMedium mt-5">
        <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
        <span>
          <span className="hidden md:inline-block">کد سفارش </span>{" "}
          <span className="font-DanaDemiBold">{orderCode}</span>
        </span>
        <span>
          مبلغ{" "}
          <span className="font-DanaDemiBold">
            {totalPrice.toLocaleString("fa")}
          </span>{" "}
          <span className="hidden md:inline-block">تومان</span>
        </span>
      </div>
      <div className="flex items-center justify-center md:justify-start flex-wrap gap-3 child:border child:border-gray-200 child:rounded-md child:p-2 my-7">
        {products.map((item) => (
          <div key={item._id}>
            <img
              src={`http://localhost:3001/uploads/covers/${item.product.images[0]}`}
              className="w-[80px]"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row-reverse">
        <Link
          to={`/factor/${_id}`}
          className="text-blue-600  flex items-center gap-x-2 font-DanaDemiBold cursor-pointer"
        >
          <svg className="w-5 h-5">
            <use href="#printer"></use>
          </svg>
          <span className="text-sm md:text-base">مشاهده فاکتور</span>
        </Link>
      </div>
    </div>
  );
}

export default Order;
