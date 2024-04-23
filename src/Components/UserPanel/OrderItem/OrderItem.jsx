import React from "react";
import { Link } from "react-router-dom";

function OrderItem({ products, orderCode, totalPrice, deliveryDate, _id }) {
  return (
    <div className="flex items-center justify-between px-2 py-4">
      <div className="grid grid-cols-4 gap-4">
        {products.slice(0, 4).map((item) => (
          <img
            src={`http://localhost:3001/uploads/covers/${item.product.images[0]}`}
            className="w-[90px]"
            alt=""
            key={item._id}
          />
        ))}
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-x-3">
          <span>کد سفارش : </span>
          <span className="font-DanaDemiBold">{orderCode}</span>
        </div>
        <span className="block">{deliveryDate}</span>
      </div>
      <div>
        <div className="flex items-center gap-x-2">
          <span>مبلغ</span>
          <span className="font-DanaDemiBold">
            {totalPrice.toLocaleString("fa")} تومان
          </span>
        </div>
        <div className="flex items-center gap-x-1 font-DanaDemiBold text-sm mt-2">
          <svg className="w-5 h-5 text-green-600">
            <use href="#check"></use>
          </svg>
          تحویل داده شده
        </div>
      </div>
      <Link
        to={`/order-detail/${_id}`}
        className="text-blue-600  flex items-center gap-x-2 font-DanaDemiBold cursor-pointer"
      >
        <svg className="w-5 h-5">
          <use href="#printer"></use>
        </svg>
        <span>مشاهده فاکتور</span>
      </Link>
    </div>
  );
}

export default OrderItem;
