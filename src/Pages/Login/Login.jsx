import React, { useContext, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema } from "./LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import useLogin from "../../Hooks/useLogin/useLogin";
import StatusModal from "../../Components/SuccessModal/SuccessModal";
import { AppContext } from "../../App";
import Spinner from "../../Components/Sppiner/Spinner";

function Login() {
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowFailedModal, setIsShowFailedModal] = useState(false);
  const { setUserInfo, setIsLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const { mutateAsync: loginUser, isLoading, isError } = useLogin();

  const loginUserHandler = async (data) => {
    const { status, infos } = await loginUser(data);
    if (status === 200) {
      clearInputs();
      setIsShowSuccessModal(true);
      localStorage.setItem("token", JSON.stringify(infos.accessToken));
      setIsLogin(true);
      setUserInfo(infos.userInfo);
    } else {
      setIsShowFailedModal(true);
    }
  };

  const navigateToShop = () => navigate("/");

  const clearInputs = () => {
    setValue("username", "");
    setValue("password", "");
  };
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="body">
        <div className="flex-center p-2.5 md:p-0">
          <div className="form-wrapper  md:relative md:z-40  shadow bg-white rounded-md  flex-center flex-col mt-10 px-5 py-8 md:p-8">
            <h1 className="font-DanaDemiBold text-xl md:text-2xl">
              ورود به حساب کاربری
            </h1>
            <h4 className="font-DanaDemiBold text-xs md:text-sm text-gray-600 mt-2 md:mt-1">
              خوشحالیم دوباره میبینیمت دوست عزیز :)
            </h4>
            <div className="bg-gray-300 w-full p-5 flex-center mt-2 rounded-[5px]">
              <span className="font-DanaDemiBold text-sm md:text-base">
                کاربر جدید هستید؟
              </span>
              <span className="flex items-center justify-center">
                <Link
                  to={"/register"}
                  className="bg-gray-600 text-white font-DanaDemiBold p-1 rounded-md mr-2 flex-center text-xs py-1.5 md:text-neutral-50"
                >
                  ثبت نام
                </Link>
                <Link
                  to={"/otp-login"}
                  className="bg-gray-600 text-white font-DanaDemiBold p-1 rounded-md  block mr-2 text-xs py-1.5 md:text-neutral-50"
                >
                  ورود با کد
                </Link>
              </span>
            </div>
            <form
              className="mt-6 space-y-6"
              onSubmit={handleSubmit(loginUserHandler)}
            >
              <div className="relative">
                <div
                  className={`flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2 ${
                    errors.username && "border-2 border-red-600"
                  }`}
                >
                  <input
                    type="text"
                    {...register("username")}
                    className="w-full outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                    id="username"
                    placeholder="نام کاربری"
                  />
                  <svg className="w-6 md:w-7 h-6  md:h-7">
                    <use href="#user-name"></use>
                  </svg>
                </div>
                {errors.username && (
                  <span className="absolute text-xs md:text-sm text-red-600 top-[48px] ">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div className="relative">
                <div
                  className={`flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2 ${
                    errors.password && "border-2 border-red-600"
                  }`}
                >
                  <input
                    type="text"
                    {...register("password")}
                    className="w-full  outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                    id="email"
                    placeholder="رمز عبور"
                  />
                  <svg className="w-6 md:w-7 h-6 md:h-7">
                    <use href="#lock"></use>
                  </svg>
                </div>
                {errors.password && (
                  <span className="absolute text-xs md:text-sm text-red-600 top-[48px] ">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <button
                disabled={isLoading}
                className="bg-blue-600 w-full relative text-white font-DanaDemiBold p-3 flex-center text-base md:text-lg rounded-md shadow-blue cursor-pointer"
              >
                <button id="login">{isLoading ? <Spinner /> : "ورود"}</button>
                <svg className="w-7 h-7 absolute right-3.5">
                  <use href="#arrow-left-on-rectangle"></use>
                </svg>
              </button>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    className="login-form__password-checkbox"
                  />
                  <span className="font-DanaMedium text-xs md:text-base">
                    مرا به خاطر داشته باش
                  </span>
                </label>
                <label className="font-DanaMedium text-xs md:text-base">
                  <a href="#">رمز عبور را فراموش کرده اید؟</a>
                </label>
              </div>
              <div className="login-des text-sm">
                <span className="font-DanaDemiBold">سلام کاربر محترم:</span>
                <ul className="login-des-list space-y-1 mt-2">
                  <li className="login-des-item line-clamp-1">
                    لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                    استفاده کنید.
                  </li>
                  <li className="login-des-item line-clamp-1">
                    ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
                  </li>
                  <li className="login-des-item line-clamp-1">
                    لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"کاربر با موفقیت لاگین شد"}
          text={"ورود به فروشگاه"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={navigateToShop}
        />
      )}
      {isShowFailedModal && (
        <StatusModal
          onClose={setIsShowFailedModal}
          title={"نام کاربری یا رمز عبور اشتباه است"}
          text={"تلاش مجدد"}
          icon={"face-frown"}
          color="text-red-600"
          bg="bg-red-600"
          onClick={() => setIsShowFailedModal(false)}
        />
      )}
    </>
  );
}

export default Login;
