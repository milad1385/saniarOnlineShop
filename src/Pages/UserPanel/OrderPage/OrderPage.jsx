import React, { useEffect } from "react";
import PageTitle from "../../../Components/UserPanel/PageTitle/PageTitle";
import useGetMain from "../../../Hooks/order/useGetMain";
import Loader from "../../../Components/Loader/Loader";
import OrderRow from "./OrderRow";

function OrderPage() {
  const { data: orders, isLoading } = useGetMain();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (isLoading) return <Loader />;
  return (
    <div>
      <PageTitle icon={"shop-card"} title={"سفارش های من"} />
      <div className="table-container mt-6">
        <table className="bg-white text-sm md:text-base">
          <thead>
            <tr className="child:border child:bg-gray-500 child:text-white child:border-slate-300 child:p-2 child:font-DanaDemiBold">
              <th>شناسه</th>
              <th> تاریخ ثبت سفارش</th>
              <th>وضعیت سفارش</th>
              <th>مبلغ پرداختی</th>
              <th>جزییات</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderRow order={order} key={order._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderPage;
