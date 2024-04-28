import React, { useContext, useEffect } from "react";
import Table from "../../../Components/AdminPanel/Table/Table";
import { AppContext } from "../../../App";
import useAll from "../../../Hooks/order/useAll";
import Loader from "../../../Components/Loader/Loader";
import OrderRow from "./OrderRow";
function Orders() {
  const { setIsShowAdminMenu } = useContext(AppContext);
  const { data: orders, isLoading } = useAll();
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);

  if (isLoading) return <Loader />;
  return (
    <>
      <div className="container">
        <div className="pb-6">
          <Table title={"لیست"} main={"سفارشات "}>
            <table className="user-table mt-7">
              <thead className="">
                <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                  <td>کد فاکتور</td>
                  <td>نام</td>
                  <td>تاریخ</td>
                  <td>ساعت</td>
                  <td>وضعیت</td>
                  <td>مبلغ</td>
                  <td>نوع پرداخت</td>
                  <td>استان</td>
                  <td>شهر</td>
                  <td>وضعیت</td>
                  <td>حذف</td>
                  <td>جزییات</td>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {orders.map((order, index) => (
                  <OrderRow order={order} key={order._id} />
                ))}
              </tbody>
            </table>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Orders;
