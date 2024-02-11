import React, { useState, useContext } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "./RegisterSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import StatusModal from "../../Components/SuccessModal/SuccessModal";
import { AppContext } from "../../App";
import useRegister from "../../Hooks/useRegister/useRegister";

function Register() {
  const [image, setImage] = useState("");
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowFaildModal, setIsShowFaildModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const { setUserInfo, setIsLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const { mutateAsync: registerUser, isLoading } = useRegister();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const submitingForm = async (data) => {
    const { name, username, password, email, phone } = data;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("image", image);

    const result = await registerUser(formData);
    if (result.status === 200) {
      clearInputs();
      setIsShowSuccessModal(true);
      const { infos } = result;
      setUserInfo(infos.userInfo);
      setIsLogin(true);
      localStorage.setItem("token", JSON.stringify(infos.accessToken));
    } else if (result.status === 404) {
      setIsShowFaildModal(true);
      setErrMsg("عملیات با خط مواجه شد");
    } else if (result.status === 409) {
      setIsShowFaildModal(true);
      setErrMsg("نام کاربری یا ایمیل تکراری است");
    }
  };

  const clearInputs = () => {
    setValue("name", "");
    setValue("email", "");
    setValue("password", "");
    setValue("phone", "");
    setValue("username", "");
    setValue("password", "");
  };
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="body">
        <div className="flex-center container">
          <div className="form-wrapper md:relative md:z-40  shadow bg-white rounded-md  flex-center flex-col mt-10 p-8">
            <h1 className="font-DanaDemiBold text-xl md:text-2xl">
              ایجاد حساب کاربری
            </h1>
            <h4 className="font-DanaDemiBold text-xs md:text-sm text-gray-600 mt-2 md:mt-1">
              به خانواده سانیار خوش آمدی :)
            </h4>
            <div className="bg-gray-300 w-full p-4 md:p-5 flex-center mt-2 rounded-[5px]">
              <span className="font-DanaDemiBold text-sm md:text-base">
                آیا حساب کاربری دارید ؟
              </span>
              <span className="form-wrapper__user-link">
                <Link
                  to={"/login"}
                  className="bg-gray-600 text-white font-DanaDemiBold p-1 rounded-md text-xs md:text-sm py-1.5 mr-2"
                >
                  ورود به حساب
                </Link>
              </span>
            </div>
            <form
              action="#"
              className="mt-6 space-y-6"
              onSubmit={handleSubmit(submitingForm)}
            >
              <div className="relative">
                <div
                  className={`flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2 ${
                    errors.name && "border-2 border-red-600"
                  }`}
                >
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                    id="realname"
                    placeholder="نام و نام خانوادگی"
                  />
                  <svg className="w-6 md:w-7 md:h-7 h-6">
                    <use href="#user"></use>
                  </svg>
                </div>
                {errors.name && (
                  <span className="absolute text-sm text-red-600 top-[48px] ">
                    {errors.name.message}
                  </span>
                )}
              </div>
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
                  <span className="absolute text-sm text-red-600 top-[48px] ">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div className="relative">
                <div
                  className={`flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2 ${
                    errors.email && "border-2 border-red-600"
                  }`}
                >
                  <input
                    type="text"
                    {...register("email")}
                    className="w-full  outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                    id="email"
                    placeholder="ایمیل"
                  />
                  <svg className="w-6 md:w-7 h-6 md:h-7 ">
                    <use href="#envelope"></use>
                  </svg>
                </div>
                {errors.email && (
                  <span className="absolute text-sm text-red-600 top-[48px] ">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="relative">
                <div
                  className={`flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2 ${
                    errors.phone && "border-2 border-red-600"
                  }`}
                >
                  <input
                    type="text"
                    {...register("phone")}
                    className="w-full  outline-none font-DanaMedium h-full pr-2 text-sm md:text-base"
                    id="phone"
                    placeholder="شماره تلفن"
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
                  <span className="absolute text-sm text-red-600 top-[48px] ">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="relative">
                <div className="flex items-center justify-between rounded-[5px] shadow border border-gray-300 p-2">
                  <input
                    type="file"
                    className="text-sm md:text-base"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <svg className="w-6 md:w-7 h-6 md:h-7">
                    <use href="#image"></use>
                  </svg>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-600 w-full relative text-base text-white font-DanaDemiBold p-3 flex-center md:text-lg rounded-md shadow-blue cursor-pointer"
              >
                <button
                  disabled={isLoading}
                  className="form-fildes__btn "
                  id="login"
                >
                  {isLoading ? "در حال ساخت" : "ثبت نام"}
                </button>
                <svg className="w-7 h-7 absolute right-3.5">
                  <use href="#arrow-left-on-rectangle"></use>
                </svg>
              </button>
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
          title={"کاربر با موفقیت ثبت نام شد"}
          text={"ورود به فروشگاه"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => navigate("/")}
        />
      )}
      {isShowFaildModal && (
        <StatusModal
          onClose={setIsShowFaildModal}
          title={errMsg}
          text={"تلاش مجدد"}
          icon={"face-frown"}
          color="text-red-600"
          bg="bg-red-600"
          onClick={() => setIsShowFaildModal(false)}
        />
      )}
    </>
  );
}

export default Register;
