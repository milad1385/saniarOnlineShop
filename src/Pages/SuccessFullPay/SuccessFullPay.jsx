import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import Footer from "../../Components/Footer/Footer";
import OrderStatus from "../../Components/OrderStatus/OrderStatus";
import { Link } from "react-router-dom";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import EditModal from "../../Components/EditModal/EditModal";

function SuccessFullPay() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container mt-14">
        <OrderStatus isActive2={true} isActive3={true} isActive4={true} />
        <div className="flex items-center justify-center flex-col mt-6">
          <svg className="w-24 h-24 text-green-600">
            <use href="#face-smile"></use>
          </svg>
          <p className="text-center text-green-600 font-DanaDemiBold mt-3 text-lg md:text-2xl">
            پرداخت شما موفقیت آمیز بود :)
          </p>
          <p className="text-green-600 text-lg font-DanaDemiBold mt-3">
            از خرید شما متشکریم ❤️
          </p>
          <div className="bg-white shadow rounded-md p-3 w-[400px] mt-5">
            <h3 className="text-center font-DanaDemiBold text-base md:text-lg border-b-2 border-b-gray-200 pb-1">
              مشخصات پرداختی
            </h3>
            <div className="mt-2 space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-DanaDemiBold">درگاه پرداخت : </span>
                <span>بانک ملت</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-DanaDemiBold">تاریخ : </span>
                <span>1402/04/01</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-DanaDemiBold">کد تراکنش : </span>
                <span>nmn8569gh</span>
              </div>
              <div className="flex items-center justify-between text-red-600">
                <span className="font-DanaDemiBold "> مقدار تخفیف : </span>
                <span>500,000 تومان</span>
              </div>
              <div className="flex items-center justify-between text-green-600">
                <span className="font-DanaDemiBold "> مقدار پرداختی : </span>
                <span>500,000 تومان</span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-md p-3 w-[400px] mt-5">
            <h3 className="text-center font-DanaDemiBold text-base md:text-lg border-b-2 border-b-gray-200 pb-1">
             وضعیت سفارش
            </h3>
            <div className="mt-2 space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-DanaDemiBold">شماره سفارش : </span>
                <span>بانک ملت</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-DanaDemiBold">قیمت کل : </span>
                <span>75,500,000 تومان</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-DanaDemiBold"> وضعیت پرداخت : </span>
                <span>پرداخت شده</span>
              </div>
              <div className="flex items-center justify-between text-green-600">
                <span className="font-DanaDemiBold "> وضعیت سفارش  : </span>
                <span>تایید شده</span>
              </div>
            </div>
          </div>
          <Link to={'/my-account'} className="bg-green-600 text-white font-DanaDemiBold p-2 rounded-md mt-5">رفتن به حساب کاربری</Link>
        </div>
      </div>
      <Footer />
      <FooterMenu />
    </>
  );
}

export default SuccessFullPay;
