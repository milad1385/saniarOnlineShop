import React, { useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import DetailModal from "../../Components/DetailModal/DetailModal";
function OtpLogin() {
  const [isCodeSent, setCodeSent] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowErrorModal, setIsShowErrorModal] = useState(false);
  const [isShowExpireModal, setIsShowExpireModal] = useState(false);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="body">
        <div className="flex-center p-2.5 md:p-0">
          {isCodeSent ? (
            <div className="form-wrapper md:relative md:z-40 w-[450px]  shadow bg-white rounded-md  flex flex-col mt-10 p-4 pb-8">
              <div className="select-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <svg className="w-8 h-8 text-blue-600">
                      <use href="#phone"></use>
                    </svg>
                    <h3 className="font-DanaDemiBold text-xl">ورود</h3>
                  </div>
                  <img
                    src="/images/logo.png"
                    class="w-[120px] xl:w-[150px] select-none"
                    alt="logo"
                  ></img>
                </div>
                <div className="h-[3px] bg-gray-200 my-2 relative">
                  <div className="absolute inset-0 bg-blue-600 w-1/6"></div>
                </div>
              </div>
              <form action="#" className="form-input__warapper mt-2">
                <div className="bg-green-200 text-green-700 select-none flex-center py-3.5 border border-green-600 text-sm md:text-base">
                  یک کد برای شما پیامک شد لطفا آن را وارد کنید
                </div>
                <div className="grid grid-cols-5 gap-x-3.5 mt-6 px-4 md:px-8">
                  <input type="text" className="otp-input" />
                  <input type="text" className="otp-input" />
                  <input type="text" className="otp-input" />
                  <input type="text" className="otp-input" />
                  <input type="text" className="otp-input" />
                </div>

                <div className="flex-center mt-5 font-DanaDemiBold text-base md:text-lg">
                  <span className="select-none">00:59</span>
                </div>
                <div className="bg-green-600 select-none relative text-white font-DanaDemiBold p-3 mt-4 flex-center text-lg rounded-md shadow-blue cursor-pointer">
                  <button className="form-fildes__btn " id="login">
                    ورود به سایت
                  </button>
                  <svg className="w-7 h-7 absolute right-3.5">
                    <use href="#arrow-left-on-rectangle"></use>
                  </svg>
                </div>
              </form>
            </div>
          ) : (
            <div className="form-wrapper md:relative md:z-40 w-[450px]  shadow bg-white rounded-md  flex flex-col mt-10 p-4 pb-8">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <svg className="w-8 h-8 text-blue-600">
                      <use href="#phone"></use>
                    </svg>
                    <h3 className="font-DanaDemiBold text-xl">ورود</h3>
                  </div>
                  <img
                    src="/images/logo.png"
                    class="w-[120px] xl:w-[150px] select-none"
                    alt="logo"
                  ></img>
                </div>
                <div className="h-[3px] bg-gray-200 my-2 relative">
                  <div className="absolute inset-0 bg-blue-600 w-1/6"></div>
                </div>
              </div>
              <form action="#" className="form-input__warapper mt-4">
                <div className="flex items-center justify-between relative rounded-[5px] shadow border border-gray-300 p-2">
                  <label
                    htmlFor="username"
                    className="absolute -top-3 bg-white right-3 text-sm md:text-base"
                  >
                    شماره تلفن را وارد کنید
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                    id="username"
                    autoComplete="false"
                  />
                  <svg className="w-6 md:w-7 h-6 md:h-7">
                    <use href="#phone"></use>
                  </svg>
                </div>
                <div className="flex items-center justify-between relative rounded-[5px] shadow border border-gray-300 p-2 mt-5">
                  <label
                    htmlFor="email"
                    className="absolute -top-3 bg-white right-3 text-sm md:text-base"
                  >
                    ایمیل خود را وارد کنید
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                    id="email"
                    autoComplete="false"
                  />
                  <svg className="w-6 md:w-7 h-6 md:h-7">
                    <use href="#envelope"></use>
                  </svg>
                </div>
                <div className="bg-blue-600 relative text-white font-DanaDemiBold p-3 mt-8 flex-center text-base md:text-lg rounded-md shadow-blue cursor-pointer">
                  <button id="login">
                    ارسال کد
                  </button>
                  <svg className="w-6 md:w-7 h-6 md:h-7 absolute right-3.5">
                    <use href="#plane"></use>
                  </svg>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <FooterMenu />

      {isShowSuccessModal && (
        <DetailModal onClose={setIsShowSuccessModal}>
          <div className="bg-white w-[325px] md:w-[400px] py-8 px-3">
            <h3 className="font-MorabbaBold text-base md:text-2xl lg:text-3xl text-center">
              با موفقیت وارد شدید
            </h3>
            <div className="flex items-center justify-center gap-x-5 mt-8">
              <button className="bg-blue-600 text-white w-[90%] font-MorabbaBold px-16 py-4 text-xl">
                ورود به پنل
              </button>
            </div>
          </div>
        </DetailModal>
      )}
      {isShowErrorModal && (
        <DetailModal onClose={setIsShowErrorModal}>
          <div className="bg-white w-[325px] md:w-[400px] py-8 px-3">
            <h3 className="font-MorabbaBold text-base md:text-2xl lg:text-3xl text-center">
              کد ورودی اشتباه است
            </h3>
            <div className="flex items-center justify-center gap-x-5 mt-8">
              <button className="bg-red-600 text-white w-[90%] font-MorabbaBold px-16 py-4 text-xl">
                تلاش مجدد
              </button>
            </div>
          </div>
        </DetailModal>
      )}
      {isShowExpireModal && (
        <DetailModal onClose={setIsShowExpireModal}>
          <div className="bg-white w-[325px] md:w-[400px] py-8 px-3">
            <h3 className="font-MorabbaBold text-base md:text-2xl lg:text-3xl text-center">
              کد ورودی منقضی شده است
            </h3>
            <div className="flex items-center justify-center gap-x-5 mt-8">
              <button className="bg-gray-600 text-white w-[90%] font-MorabbaBold px-16 py-4 text-base md:text-xl">
                ارسال مجدد
              </button>
            </div>
          </div>
        </DetailModal>
      )}
    </>
  );
}

export default OtpLogin;
