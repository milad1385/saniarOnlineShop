import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import DetailModal from "../../Components/DetailModal/DetailModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { otpSchema } from "./OtpSchema";
import useOtp from "../../Hooks/useOtp/useOtp";
import Spinner from "../../Components/Sppiner/Spinner";
import useVerfiy from "../../Hooks/useVerify/useVerfiy";
import { useNavigate } from "react-router-dom";
function OtpLogin() {
  const [isCodeSent, setCodeSent] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowErrorModal, setIsShowErrorModal] = useState(false);
  const [isShowExpireModal, setIsShowExpireModal] = useState(false);
  const [isShowSendModal, setIsShowSendModal] = useState(false);
  const [isShowErrSendModal, setIsShowErrSendModal] = useState(false);
  const [code, setCode] = useState(null);
  const [time, setTime] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(id);
      setIsShowExpireModal(true);
    }

    return () => clearInterval(id);
  }, [time]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(otpSchema) });
  const { mutateAsync: otpLoginHandler, isLoading } = useOtp();
  const { mutateAsync: otpVerify, isLoading: verfiyCodeLoading } = useVerfiy();

  const handleLogin = async (data) => {
    const { status, time } = await otpLoginHandler(data);

    setTime(Math.floor((time - new Date().getTime()) / 1000));
    if (status === 200) {
      setIsShowSendModal(true);
    } else {
      setIsShowErrSendModal(true);
    }
  };

  const verfiyCode = async (e) => {
    e.preventDefault();
    const otpInfo = {
      email: getValues().email,
      phone: getValues().phone,
      code,
    };

    const { accessToken, status } = await otpVerify(otpInfo);
    if (status === 200) {
      localStorage.setItem("token", JSON.stringify(accessToken));
      setIsShowSuccessModal(true);
    } else if (status === 409) {
      setIsShowErrorModal(true);
    } else if (status === 410) {
      setIsShowExpireModal(true);
    }
  };
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
              <form
                action="#"
                className="form-input__warapper mt-2"
                onSubmit={verfiyCode}
              >
                <div className="bg-green-200 text-green-700 select-none flex-center py-3.5 border border-green-600 text-sm md:text-base">
                  یک کد برای شما پیامک شد لطفا آن را وارد کنید
                </div>
                <div className="relative mt-5">
                  <div
                    className={`flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2 `}
                  >
                    <input
                      type="text"
                      className="w-full outline-none pl-2 font-DanaMedium h-full pr-2 text-sm md:text-base text-left"
                      id="code"
                      minLength={4}
                      maxLength={4}
                      onChange={(e) => setCode(+e.target.value)}
                      autoComplete="false"
                    />
                    <svg className="w-6 md:w-7 md:h-7 h-6">
                      <use href="#msg"></use>
                    </svg>
                  </div>
                  {/* {errors.name && (
                    <span className="absolute text-sm text-red-600 top-[48px] ">
                      {errors.name.message}
                    </span>
                  )} */}
                </div>
                <div className="flex-center mt-5 font-DanaDemiBold text-base md:text-lg">
                  <span className="select-none">
                    {time < 10 ? `00:0${time}` : `00:${time}`}
                  </span>
                </div>
                <div className="bg-green-600 select-none relative text-white font-DanaDemiBold p-3 mt-4 flex-center text-base md:text-lg rounded-md shadow-blue cursor-pointer">
                  <button className="outline-none">ورود به سایت</button>
                  <svg className="w-6 md:w-7 h-6 md:h-7 absolute right-3.5">
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
              <form
                action="#"
                onSubmit={handleSubmit(handleLogin)}
                className="form-input__warapper mt-4 space-y-10"
              >
                <div className="relative">
                  <div className="flex items-center justify-between relative rounded-[5px] shadow border border-gray-300 p-2">
                    <label
                      htmlFor="username"
                      className="absolute -top-3 bg-white right-3 text-sm md:text-base"
                    >
                      شماره تلفن را وارد کنید
                    </label>
                    <input
                      type="text"
                      {...register("phone")}
                      className="w-full outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                      id="username"
                      autoComplete="false"
                    />
                    <svg className="w-6 md:w-7 h-6 md:h-7">
                      <use href="#phone"></use>
                    </svg>
                  </div>
                  {errors.phone && (
                    <span className="absolute text-sm text-red-600 top-[48px] ">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between relative rounded-[5px] shadow border border-gray-300 p-2 mt-5">
                    <label
                      htmlFor="email"
                      className="absolute -top-3 bg-white right-3 text-sm md:text-base"
                    >
                      ایمیل خود را وارد کنید
                    </label>
                    <input
                      type="text"
                      {...register("email")}
                      className="w-full outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                      id="email"
                      autoComplete="false"
                    />
                    <svg className="w-6 md:w-7 h-6 md:h-7">
                      <use href="#envelope"></use>
                    </svg>
                  </div>
                  {errors.email && (
                    <span className="absolute text-sm text-red-600 top-[48px] ">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="bg-blue-600 relative text-white font-DanaDemiBold p-3 mt-8 flex-center text-base md:text-lg rounded-md shadow-blue cursor-pointer">
                  <button id="login">
                    {isLoading ? <Spinner /> : "ارسال کد"}
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
        <DetailModal
          onClose={setIsShowSuccessModal}
          onClick={() => {
            navigate("/");
            location.reload();
          }}
        >
          <div className="bg-white w-[325px] md:w-[400px] py-8 px-3">
            <h3 className="font-MorabbaBold text-base md:text-2xl lg:text-3xl text-center">
              با موفقیت وارد شدید
            </h3>
            <div className="flex items-center justify-center gap-x-5 mt-8">
              <button
                className="bg-blue-600 text-white w-[90%] font-MorabbaBold px-16 py-4 text-xl"
                onClick={() => {
                  navigate("/");
                  location.reload();
                }}
              >
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
          <div
            className="bg-white w-[325px] md:w-[400px] py-8 px-3"
            onClick={() => {
              setCodeSent(false);
              setIsShowExpireModal(false);
            }}
          >
            <h3 className="font-MorabbaBold text-base md:text-2xl lg:text-3xl text-center">
              کد ورودی منقضی شده است
            </h3>
            <div
              className="flex items-center justify-center gap-x-5 mt-8"
              onClick={() => {
                setCodeSent(false);
                setIsShowExpireModal(false);
              }}
            >
              <button className="bg-gray-600 text-white w-[90%] font-MorabbaBold px-16 py-4 text-base md:text-xl">
                ارسال مجدد
              </button>
            </div>
          </div>
        </DetailModal>
      )}
      {isShowSendModal && (
        <DetailModal
          onClose={setIsShowSendModal}
          onClick={() => {
            setIsShowSendModal(false);
            setCodeSent(true);
          }}
        >
          <div className="bg-white w-[325px] md:w-[400px] py-8 px-3">
            <h3 className="font-MorabbaBold text-base md:text-2xl lg:text-3xl text-center">
              کد با موفقیت ارسال شد
            </h3>
            <div
              className="flex items-center justify-center gap-x-5 mt-8"
              onClick={() => {
                setIsShowSendModal(false);
                setCodeSent(true);
              }}
            >
              <button className="bg-blue-600 text-white w-[90%] font-MorabbaBold px-16 py-4 text-xl">
                خیلی هم عالی
              </button>
            </div>
          </div>
        </DetailModal>
      )}
      {isShowErrSendModal && (
        <DetailModal onClose={setIsShowErrSendModal}>
          <div className="bg-white w-[325px] md:w-[400px] py-8 px-3">
            <h3 className="font-MorabbaBold text-base md:text-2xl lg:text-3xl text-center">
              شماره یا ایمیل یافت نشد
            </h3>
            <div
              className="flex items-center justify-center gap-x-5 mt-8"
              onClick={() => setIsShowErrSendModal(false)}
            >
              <button className="bg-red-600 text-white w-[90%] font-MorabbaBold px-16 py-4 text-xl">
                تلاش مجدد
              </button>
            </div>
          </div>
        </DetailModal>
      )}
    </>
  );
}

export default OtpLogin;
