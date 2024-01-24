import React, { useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import OrderStatus from "../../Components/OrderStatus/OrderStatus";
import PageTitle from "../../Components/UserPanel/PageTitle/PageTitle";

import DatePickerComponent from "../../Components/DatePickerComponent/DatePickerComponent";

function DetailPay() {
  const [submittedDate, setSubmittedDate] = useState();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [PostType, setPostType] = useState("");
  const [paidMoneyType, setPaidMoneyType] = useState("");

  const onSubmit = ({ date }) => {
    setSubmittedDate(date);
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container mt-8">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "فروشگاه", to: "/" },
            { id: 3, name: "پرداخت", to: "/" },
          ]}
        />
        <div className="mt-12">
          <OrderStatus isActive2={true} />
        </div>
        <div className="flex gap-x-4 py-8">
          <div className="w-full h-[700px] sticky top-0 bg-white rounded-md shadow py-4 px-5">
            <PageTitle title={"جزییات پرداخت"} icon={"money"} />
            <div className="grid grid-cols-1 md:grid-cols-2 pt-3  gap-x-10 gap-y-6 child:flex child:flex-col">
              <div>
                <label
                  for="email"
                  className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
                >
                  نام
                </label>
                <input
                  type="text"
                  className="mt-1 md:mt-2 py-3 px-3 rounded-md outline-none bg-gray-100"
                  id="name"
                  placeholder="نام  خود را وارد کنید ..."
                  name="name"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
                >
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  className="mt-1 md:mt-2 py-3 px-3 rounded-md outline-none bg-gray-100"
                  id="family"
                  placeholder="نام خانوادگی خود را وارد کنید ..."
                  name="family"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
                >
                  استان
                </label>
                <select
                  type="text"
                  className="mt-1 md:mt-2 py-3 px-3 rounded-md outline-none bg-gray-100"
                >
                  <option value="-1">استان خود را انتخاب کنید ...</option>
                  <option value="karaj">کرج</option>
                  <option value="Tehran">تهران</option>
                </select>
              </div>
              <div>
                <label
                  for="email"
                  className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
                >
                  شهر
                </label>
                <select
                  type="text"
                  className="mt-1 md:mt-2 py-3 px-3 rounded-md outline-none bg-gray-100"
                >
                  <option value="-1">شهر خود را انتخاب کنید ...</option>
                  <option value="fardis">فردیس</option>
                  <option value="mehrshahr">مهرشهر</option>
                </select>
              </div>
              <div>
                <label
                  for="email"
                  className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
                >
                  تلفن
                </label>
                <input
                  type="text"
                  className="mt-1 md:mt-2 py-3 px-3 rounded-md outline-none bg-gray-100"
                  id="phone"
                  placeholder="تلفن خود را وارد کنید ..."
                  name="phone"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
                >
                  آدرس ایمیل
                </label>
                <input
                  type="text"
                  className="mt-1 md:mt-2 py-3 px-3 rounded-md outline-none bg-gray-100"
                  id="name"
                  placeholder="آدرس ایمیل خود را وارد کنید ..."
                  name="name"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
                >
                  کد پستی
                </label>
                <input
                  type="text"
                  className="mt-1 md:mt-2 py-3 px-3 rounded-md outline-none bg-gray-100"
                  id="name"
                  placeholder="کد پستی خود را وارد کنید ..."
                  name="name"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
                >
                  آدرس
                </label>
                <input
                  type="text"
                  className="mt-1 md:mt-2 py-3 px-3 rounded-md outline-none bg-gray-100"
                  id="name"
                  placeholder=" آدرس خود را وارد کنید ..."
                  name="name"
                />
              </div>
            </div>
            <div className="w-full flex flex-col mt-7">
              <label
                for="email"
                className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
              >
                یادداشت سفارش (اختیاری)
              </label>
              <textarea
                type="text"
                className="mt-1 md:mt-2 py-3 px-3 h-36 rounded-md outline-none bg-gray-100"
                id="name"
                placeholder=" یادداشت خود را وارد کنید ..."
                name="name"
              ></textarea>
            </div>
          </div>
          <div className="w-[450px] rounded-md space-y-4">
            <div className="bg-white rounded-md shadow  p-3">
              <PageTitle title={"زمان ارسال"} icon={"calender"} />
              <DatePickerComponent
                onSubmit={onSubmit}
                setDate={setDate}
                setTime={setTime}
              />
              <p className="mt-5 font-DanaDemiBold text-sm">
                تاریخ ارسال محصول:{" "}
                {submittedDate?.format?.("D MMMM YYYY") || "انتخاب کنید"}
              </p>
              <p className="mt-3 font-DanaDemiBold text-sm">
                ساعت ارسال محصول : {time || "انتخاب کنید"}
              </p>
            </div>
            <div className="bg-white rounded-md shadow  p-3">
              <PageTitle title={"انتخاب شیوه ارسال"} icon={"track"} />
              <div className="mt-3 space-y-3">
                <div
                  className={`flex items-center gap-x-3 cursor-pointer border-2 rounded-md p-1 ${
                    PostType === "ordinary"
                      ? "border-blue-600"
                      : "border-gray-200"
                  }`}
                  onClick={() => {
                    setPostType("ordinary");
                  }}
                >
                  <img
                    src="/images/post.png"
                    alt="post.png"
                    className="w-12 h-12 border-2 p-1 select-none rounded-md border-gray-200"
                  />
                  <p className="font-DanaDemiBold text-sm">
                    پست معمولی :{" "}
                    <span className="font-DanaMedium">8,000 تومان</span>
                  </p>
                </div>
                <div
                  className={`flex items-center gap-x-3 cursor-pointer border-2 rounded-md p-1 ${
                    PostType === "express"
                      ? "border-blue-600"
                      : "border-gray-200"
                  }`}
                  onClick={() => {
                    setPostType("express");
                  }}
                >
                  <img
                    src="/images/post.png"
                    alt="post.png"
                    className="w-12 h-12 border-2 p-1 select-none rounded-md border-gray-200"
                  />
                  <p className="font-DanaDemiBold text-sm">
                    پست پیشتاز :{" "}
                    <span className="font-DanaMedium">16,000 تومان</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow  p-3">
              <PageTitle title={"انتخاب شیوه پرداخت"} icon={"money"} />
              <div className="mt-3 space-y-3">
                <div
                  className={`flex items-center gap-x-3 cursor-pointer border-2 rounded-md p-2 ${
                    paidMoneyType === "card"
                      ? "border-blue-600"
                      : "border-gray-200"
                  }`}
                  onClick={() => {
                    setPaidMoneyType("card");
                  }}
                >
                  <svg className="w-6 h-6">
                    <use href="#card"></use>
                  </svg>
                  <p className="font-DanaDemiBold text-sm">
                    انتقال مستقیم کارت
                  </p>
                </div>
                <div
                  className={`flex items-center gap-x-3 cursor-pointer  border-2 rounded-md p-2 ${
                    paidMoneyType === "home"
                      ? "border-blue-600"
                      : "border-gray-200"
                  }`}
                  onClick={() => {
                    setPaidMoneyType("home");
                  }}
                >
                  <svg className="w-6 h-6">
                    <use href="#home"></use>
                  </svg>
                  <p className="font-DanaDemiBold text-sm">
                    پرداخت هنگام دریافت
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow p-3 sticky top-0 ">
              <div>
                <h3 className="font-DanaDemiBold text-base md:text-lg flex items-center gap-x-2">
                  <svg className="w-5 md:w-7 h-5 md:h-7 text-blue-600">
                    <use href="#shopping-cart"></use>
                  </svg>
                  سفارش شما
                </h3>
                <div className="h-[3px] bg-gray-200 my-2 relative">
                  <div className="absolute inset-0 bg-blue-600 w-1/12"></div>
                </div>
              </div>
              <div className="font-DanaDemiBold flex items-center justify-between mt-3 text-sm text-gray-500">
                <p>محصول</p>
                <p>قیمت کل</p>
              </div>
              <div className="mt-5 text-sm font-DanaDemiBold space-y-4">
                <div className="flex items-center justify-between bg-gray-100 py-3 px-2 rounded-md">
                  <span>جمع مبلغ: </span>
                  <p>
                    1,750,000 <span>تومان</span>
                  </p>
                </div>
                <div className="flex items-center justify-between bg-gray-100 py-3 px-2 rounded-md">
                  <span>تخفیف : </span>
                  <p>
                    1,750,000 <span>تومان</span>
                  </p>
                </div>
                <div className="flex items-center justify-between bg-gray-100 py-3 px-2 rounded-md">
                  <span>مبلغ کل : </span>
                  <p>
                    1,750,000 <span>تومان</span>
                  </p>
                </div>
              </div>
              <a
                className="bg-amber-500 font-DanaDemiBold  flex items-center justify-center text-white p-2 px-6 rounded-md shadow-blue w-full mt-5"
                href="/order/detail"
              >
                پرداخت 
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPay;
