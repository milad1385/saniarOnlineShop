import React, { useEffect, useState } from "react";
import PageTitle from "../../../Components/UserPanel/PageTitle/PageTitle";
import EmptyError from "../../../Components/UserPanel/EmptyError/EmptyError";

function Adress() {
  const [isShowOption, setIsShowOption] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <PageTitle title={"آدرس های من"} icon={"map"} />
      <div className="bg-white mt-6 rounded-md">
        <div className="bg-gray-200 flex items-center justify-between py-2.5 px-4 rounded-tl-md rounded-tr-md">
          <h3 className="font-DanaDemiBold text-lg">آدرس ها</h3>
          <button className="bg-blue-600 font-DanaMedium text-white shadow rounded-md p-3 flex-center gap-x-2">
            ثبت آدرس جدید
            <svg className="w-6 h-6">
              <use href="#plus-circle"></use>
            </svg>
          </button>
        </div>
        <div className="px-[18px] py-4">
          <div className="flex items-center justify-between mt-2">
            <p className="font-DanaMedium text-zinc-700">
              کرج ، فردیس ، کانال غربی ، بعد از چهار راه قریشی ساختمان ارکیده
              پ378
            </p>
            <div className="relative">
              <svg
                className="w-6 h-6"
                onClick={() => setIsShowOption((prev) => !prev)}
              >
                <use href="#setting"></use>
              </svg>
              <div
                className={`${
                  isShowOption ? "block" : "hidden"
                } bg-blue-600 space-y-2   option-menu cursor-pointer rounded-tr-md rounded-b-md shadow-blue text-white  absolute top-[35px] -right-[90px] py-2 px-2`}
              >
                <p
                  className="flex items-center justify-between gap-x-5"
                  id="option-menu"
                >
                  حذف
                  <svg className="w-5 h-5">
                    <use href="#trash"></use>
                  </svg>
                </p>
                <p className="flex items-center justify-between gap-x-5">
                  ویرایش
                  <svg className="w-5 h-5">
                    <use href="#edit"></use>
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <div className="space-y-5">
              <div className="flex items-center gap-x-2">
                <svg className="w-6 h-6">
                  <use href="#map"></use>
                </svg>
                <p>
                  <span className="font-DanaDemiBold">آدرس</span> : کرج ، فردیس
                  ، کانال غربی ، شقایق شرقی
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <svg className="w-6 h-6">
                  <use href="#phone"></use>
                </svg>
                <p>
                  <span className="font-DanaDemiBold">تلفن</span> : 02636564517
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <svg className="w-6 h-6">
                  <use href="#envelope"></use>
                </svg>
                <p>
                  <span className="font-DanaDemiBold">کد پستی</span> : 365666123
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <svg className="w-6 h-6">
                  <use href="#mobile"></use>
                </svg>
                <p>
                  <span className="font-DanaDemiBold">شماره همراه</span> :
                  09336084013
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <svg className="w-6 h-6">
                  <use href="#user"></use>
                </svg>
                <p>
                  {" "}
                  <span className="font-DanaDemiBold">نام تحویل گیرنده</span> :
                  میلاد سلامیان
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <EmptyError msg={"تاکنون آدرس خود را وارد نکرده اید"} />
      </div>
    </div>
  );
}

export default Adress;
