import React from "react";
import useHandover from "../../../Hooks/order/useHandover";
import useAccept from "../../../Hooks/order/useAccept";
import TButton from "../../../Components/AdminPanel/TButton/TButton";
import { Link } from "react-router-dom";

function OrderRow({ order }) {
  const { mutateAsync: acceptOrder, isLoading: loadingAccept } = useAccept();
  const { mutateAsync: handOver, isLoading: loadingHandOver } = useHandover();
  return (
    <tr className="child:p-4 text-center font-DanaMedium">
      <td
        className={`${
          order.status === 0
            ? "bg-red-600"
            : order.status === 1
            ? "bg-sky-500"
            : order.status === 2
            ? "bg-green-600"
            : ""
        } text-white`}
      >
        {order.orderCode}
      </td>
      <td>{order.user.name}</td>
      <td>{new Date(order.createdAt).toLocaleDateString("fa-IR")}</td>
      <td>
        {new Date(order.createdAt).getHours() +
          ":" +
          new Date(order.createdAt).getMinutes()}
      </td>
      <td>
        {order.status === 0 && "در حال بررسی"}
        {order.status === 1 && "در حال ارسال"}
        {order.status === 2 && "تحویل داده شده"}
      </td>
      <td>{order.totalPrice.toLocaleString("fa")}</td>
      <td>{order.isPay ? "اینترنتی" : "حضوری"}</td>
      <td>{order.province}</td>
      <td>{order.city}</td>
      <td>
        {order.status === 0 && (
          <TButton
            disable={loadingAccept}
            onClick={async () =>
              await acceptOrder({
                id: order._id,
                email: order.user.email,
              })
            }
            className="bg-sky-600"
          >
            {loadingAccept ? "..." : "تایید"}
          </TButton>
        )}
        {order.status === 1 && (
          <TButton
            className="bg-green-600"
            disable={loadingHandOver}
            onClick={async () =>
              await handOver({
                id: order._id,
                email: order.user.email,
              })
            }
          >
            {loadingAccept ? "..." : "تحویل"}
          </TButton>
        )}
        {order.status === 2 && (
          <TButton className="bg-orange-900 flex-center h-[36px]">
            <svg className="w-6 h-6">
              <use href="#check-mark"></use>
            </svg>
          </TButton>
        )}
      </td>
      <td>
        <button className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
          حذف
        </button>
      </td>
      <td>
        <Link
          to={`/factor/${order._id}`}
          className="bg-amber-500 text-white w-16 px-2 py-1 text-base md:text-lg rounded-md font-Lalezar"
        >
          جزییات
        </Link>
      </td>
    </tr>
  );
}

export default OrderRow;
