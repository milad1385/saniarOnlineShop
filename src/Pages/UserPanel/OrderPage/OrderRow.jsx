import React from "react";
import { Link } from "react-router-dom";

function OrderRow({ order }) {
  return (
    <tr className="text-center child:border text-sm md:text-base child:border-slate-300 child:p-2 child:font-DanaMedium">
      <td>{order.orderCode}</td>
      <td>{new Date(order.createdAt).toLocaleDateString("fa")}</td>
      <td>
        <span
          className={`mr-2 ${
            order.status === 0
              ? "bg-red-600"
              : order.status === 1
              ? "bg-sky-500"
              : order.status === 2
              ? "bg-green-600"
              : ""
          } text-white py-1 px-2 text-sm`}
        >
          {order.status === 0 && "در حال بررسی"}
          {order.status === 1 && "در حال ارسال"}
          {order.status === 2 && "تحویل داده شده"}
        </span>
      </td>
      <td>{order.totalPrice.toLocaleString("fa")} تومان</td>
      <td>
        <Link to={`/my-account/order-detail/${order._id}`}>
          <button className="flex-center mx-auto gap-x-1 md:gap-x-2 bg-blue-600 text-white py-1.5 px-2 rounded-md shadow-blue">
            مشاهده
            <svg className="w-5 h-5">
              <use href="#eye"></use>
            </svg>
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default OrderRow;
