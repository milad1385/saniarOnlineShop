import React, { useContext, useEffect } from "react";
import StatBox from "../../../Components/UserPanel/StatBox/StatBox";
import { AppContext } from "../../../App";

function MainPage() {
  const context = useContext(AppContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-white shadow p-4 rounded-md flex flex-col md:flex-row">
        <div>
          <p className="font-DanaDemiBold text-base md:text-lg">
            سلام ، <span className="text-blue-600">{context?.userInfo?.name}</span>{" "}
            <span className="text-3xl">🙌</span>
          </p>
          <p className="font-DanaDemiBold mt-3">
            به فروشگاه سانیار خوش آمدید ❤️
          </p>
          <p className="text-zinc-700 mt-5 leading-8">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-5">
        <StatBox title={"سفارش های من"} count={5} icon={"shop-card"} />
        <StatBox title={"آدرس های من"} count={2} icon={"map"} />
        <StatBox title={"کامنت های من"} count={3} icon={"msg"} />
        <StatBox title={"مورد علاقه من"} count={8} icon={"heart"} />
      </div>
      <div className="mt-5 bg-white p-4 rounded-md shadow">
        <h3 className="font-DanaDemiBold text-base md:text-lg flex items-center gap-x-2">
          <svg className="w-5 md:w-7 h-5 md:h-7 text-blue-600">
            <use href="#shop-card"></use>
          </svg>
          سایر فروشندگان موجود
        </h3>
        <div className="h-0.5 bg-gray-200 my-2 relative">
          <div className="absolute inset-0 bg-blue-600 w-1/12"></div>
        </div>
        <div className="divide-y-2 divide-gray-200">
          <div className="flex items-center justify-between px-2 py-4">
            <img src="/images/rog.png" className="w-[150px]" alt="" />
            <p className="font-DanaDemiBold w-[200px] text-sm/[28px]">
              لپ تاپ 14.2 اینچی اپل مدل 2021 MacBook MKGR3 M1 Pro
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-x-3">
                <span>کد سفارش : </span>
                <span className="font-DanaDemiBold">427515</span>
              </div>
              <span className="block">4 تیرماه 1403</span>
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <span>مبلغ</span>
                <span className="font-DanaDemiBold">1,700,000 تومان</span>
              </div>
              <div className="flex items-center gap-x-1 font-DanaDemiBold text-sm mt-2">
                <svg className="w-5 h-5 text-green-600">
                  <use href="#check"></use>
                </svg>
                تحویل داده شده
              </div>
            </div>
            <div className="text-blue-600 flex items-center gap-x-2 font-DanaDemiBold">
              <svg className="w-5 h-5">
                <use href="#printer"></use>
              </svg>
              <span>مشاهده فاکتور</span>
            </div>
          </div>
          <div className="flex items-center justify-between px-2 py-4">
            <img src="/images/rog.png" className="w-[150px]" alt="" />
            <p className="font-DanaDemiBold w-[200px] text-sm/[28px]">
              لپ تاپ 14.2 اینچی اپل مدل 2021 MacBook MKGR3 M1 Pro
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-x-3">
                <span>کد سفارش : </span>
                <span className="font-DanaDemiBold">427515</span>
              </div>
              <span className="block">4 تیرماه 1403</span>
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <span>مبلغ</span>
                <span className="font-DanaDemiBold">1,700,000 تومان</span>
              </div>
              <div className="flex items-center gap-x-1 font-DanaDemiBold text-sm mt-2">
                <svg className="w-5 h-5 text-green-600">
                  <use href="#check"></use>
                </svg>
                تحویل داده شده
              </div>
            </div>
            <div className="text-blue-600 flex items-center gap-x-2 font-DanaDemiBold">
              <svg className="w-5 h-5">
                <use href="#printer"></use>
              </svg>
              <span>مشاهده فاکتور</span>
            </div>
          </div>
          <div className="flex items-center justify-between px-2 py-4">
            <img src="/images/rog.png" className="w-[150px]" alt="" />
            <p className="font-DanaDemiBold w-[200px] text-sm/[28px]">
              لپ تاپ 14.2 اینچی اپل مدل 2021 MacBook MKGR3 M1 Pro
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-x-3">
                <span>کد سفارش : </span>
                <span className="font-DanaDemiBold">427515</span>
              </div>
              <span className="block">4 تیرماه 1403</span>
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <span>مبلغ</span>
                <span className="font-DanaDemiBold">1,700,000 تومان</span>
              </div>
              <div className="flex items-center gap-x-1 font-DanaDemiBold text-sm mt-2">
                <svg className="w-5 h-5 text-green-600">
                  <use href="#check"></use>
                </svg>
                تحویل داده شده
              </div>
            </div>
            <div className="text-blue-600 flex items-center gap-x-2 font-DanaDemiBold">
              <svg className="w-5 h-5">
                <use href="#printer"></use>
              </svg>
              <span>مشاهده فاکتور</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
