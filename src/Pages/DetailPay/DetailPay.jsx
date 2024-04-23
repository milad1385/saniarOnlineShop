import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import OrderStatus from "../../Components/OrderStatus/OrderStatus";
import PageTitle from "../../Components/UserPanel/PageTitle/PageTitle";
import citiesState from "../../Utils/city";

import DatePickerComponent from "../../Components/DatePickerComponent/DatePickerComponent";
import useBasket from "../../Hooks/basket/useBasket";
import useOrder from "../../Hooks/order/useOrder";
import { useNavigate } from "react-router-dom";

function DetailPay() {
  const navigate = useNavigate();
  const [submittedDate, setSubmittedDate] = useState();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [PostType, setPostType] = useState("");
  const [paidMoneyType, setPaidMoneyType] = useState("");
  const [cities, setCities] = useState([]);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [note, setNote] = useState("");

  const { data: baskets } = useBasket();
  const { mutateAsync: createOrder, isLoading } = useOrder();

  const calculateTotalPrice = baskets?.reduce(
    (prev, curr) => prev + curr.price * curr.qty,
    0
  );

  const calcTotalDiscount = baskets?.reduce(
    (prev, curr) =>
      prev + (curr.qty * (curr.product.price * curr.product.off)) / 100,
    0
  );

  const calcTotal = calculateTotalPrice - calcTotalDiscount;

  const provinces = citiesState().map((city) => city.label);
  console.log(provinces);
  const onSubmit = ({ date }) => {
    setSubmittedDate(date);
  };

  useEffect(() => {
    const cities = citiesState().filter((item) => item.label === province);
    setCities(cities);
  }, [province]);

  const payBasketHandler = async (e) => {
    e.preventDefault();
    if (
      !postCode ||
      !address ||
      !province ||
      !city ||
      !time ||
      !submittedDate
    ) {
      return false;
    }
    const orderObj = {
      products: baskets,
      province,
      city,
      note,
      postCode,
      address,
      deliveryDate: submittedDate?.format?.("D MMMM YYYY"),
      deliveryTime: time,
      PostType: PostType === "ordinary" ? "پست عادی" : "پست پیشتاز",
      isPay: paidMoneyType === "card" ? true : false,
      totalPrice: +calcTotal,
      discount: +calcTotalDiscount,
    };
    const result = await createOrder(orderObj);
    if (result.status === 201) {
      navigate(
        `/order/successfull?discount=${calcTotalDiscount}&total=${calculateTotalPrice}`
      );
    }
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
          <div className="w-full h-[490px] sticky top-0 bg-white rounded-md shadow py-4 px-5">
            <PageTitle title={"جزییات پرداخت"} icon={"money"} />
            <div className="grid grid-cols-1 md:grid-cols-2 pt-3  gap-x-10 gap-y-6 child:flex child:flex-col">
              <div>
                <label
                  for="email"
                  className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
                >
                  استان
                </label>
                <select
                  onChange={(e) => setProvince(e.target.value)}
                  type="text"
                  className="mt-1 md:mt-2 py-3 px-3 rounded-md outline-none bg-gray-100"
                >
                  <option value="-1">استان خود را انتخاب کنید ...</option>
                  {provinces?.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
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
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1 md:mt-2 py-3 px-3 rounded-md outline-none bg-gray-100"
                >
                  <option value="-1">شهر خود را انتخاب کنید ...</option>
                  {province.length > 0 &&
                    cities?.[0]?.value.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
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
                  onChange={(e) => setPostCode(e.target.value)}
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
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full flex flex-col mt-7">
              <label
                htmlFor="note"
                className="font-DanaDemiBold text-base text-zinc-700 dark:text-white"
              >
                یادداشت سفارش (اختیاری)
              </label>
              <textarea
                type="text"
                className="mt-1 md:mt-2 py-3 px-3 h-36 rounded-md outline-none bg-gray-100"
                id="name"
                placeholder=" یادداشت خود را وارد کنید ..."
                name="note"
                onChange={(e) => setNote(e.target.value)}
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
                    {calculateTotalPrice?.toLocaleString("fa")}{" "}
                    <span>تومان</span>
                  </p>
                </div>
                <div className="flex items-center justify-between bg-gray-100 py-3 px-2 rounded-md">
                  <span>تخفیف : </span>
                  <p>
                    {calcTotalDiscount?.toLocaleString("fa")} <span>تومان</span>
                  </p>
                </div>
                <div className="flex items-center justify-between bg-gray-100 py-3 px-2 rounded-md">
                  <span>مبلغ کل : </span>
                  <p>
                    {calcTotal.toLocaleString("fa")} <span>تومان</span>
                  </p>
                </div>
              </div>
              <button
                onClick={payBasketHandler}
                className="bg-amber-500 font-DanaDemiBold  flex items-center justify-center text-white p-2 px-6 rounded-md shadow-blue w-full mt-5"
              >
                پرداخت
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPay;
