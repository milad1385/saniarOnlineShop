import React, { useContext, useEffect } from "react";
import StatBox from "../../../Components/UserPanel/StatBox/StatBox";
import { AppContext } from "../../../App";
import useGetMain from "../../../Hooks/order/useGetMain";
import OrderItem from "../../../Components/UserPanel/OrderItem/OrderItem";
import useStat from "../../../Hooks/stats/p-user/useStat";
import Order from "../../../Components/UserPanel/OrderItem/Order";
import PageTitle from "../../../Components/UserPanel/PageTitle/PageTitle";
import EmptyError from "../../../Components/UserPanel/EmptyError/EmptyError";
import Loader from "../../../Components/Loader/Loader";

function MainPage() {
  const context = useContext(AppContext);
  const { data: orders, isLoading } = useGetMain();
  const { data: stats } = useStat();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="bg-white shadow p-4 rounded-md flex flex-col md:flex-row">
        <div>
          <p className="font-DanaDemiBold text-base md:text-lg">
            سلام ،{" "}
            <span className="text-blue-600">{context?.userInfo?.name}</span>{" "}
            <span className="text-3xl">🙌</span>
          </p>
          <p className="font-DanaDemiBold mt-3">
            به فروشگاه اسمارت کالا خوش آمدید ❤️
          </p>
          <p className="text-zinc-700 mt-5 leading-8 text-sm md:text-base">
            از پیش خوان حساب کاربری خود میتوانید{" "}
            <span className="font-DanaDemiBold text-black">آخرین سفارش ها</span>{" "}
            را ببینید به راحتی{" "}
            <span className="font-DanaDemiBold text-black">
              آدرس آدرس حمل و نقل و صورت حساب
            </span>{" "}
            را مدیریت کنید و{" "}
            <span className="font-DanaDemiBold text-black">
              آدرس آدرس حمل و نقل و صورت حساب
            </span>{" "}
            خود را تغییر دهید
          </p>
        </div>
        <img src="/images/panel.svg" alt="panel.svg" className="w-[335px]" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-5">
        <StatBox title={"سفارش ها"} count={stats?.orders} icon={"shop-card"} />
        <StatBox title={"آدرس ها"} count={2} icon={"map"} />
        <StatBox title={"کامنت ها"} count={stats?.comments} icon={"msg"} />
        <StatBox title={"علاقه ها"} count={stats?.wishList} icon={"heart"} />
      </div>
      <div className="mt-5 bg-white p-4 rounded-md shadow">
        <PageTitle icon={`shop-card`} title={`لیست سفارشات`} />
        <div className="divide-y-2 divide-gray-200">
          {orders?.length ? (
            <>
              {orders?.map((order) => (
                <Order key={order._id} {...order} />
              ))}
            </>
          ) : (
            <EmptyError msg={"هنوز هیچ سفارشی ندارید 🔎"} className={"my-6"} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
