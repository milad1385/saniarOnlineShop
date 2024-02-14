import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Sppiner from "../../../../Components/Sppiner/Spinner";
import useRegister from "../../../../Hooks/useRegister/useRegister";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import {registerSchema} from "../../../../Pages/Register/RegisterSchema";

function AddNewUser() {
  const [image, setImage] = useState("");
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowFaildModal, setIsShowFaildModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const { mutateAsync: registerNewUser, isLoading } = useRegister();

  const createNewUserHandler = async (data) => {
    console.log(data);
    const { name, username, password, email, phone } = data;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("image", image);

    const result = await registerNewUser(formData);
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
      <h3 className="font-Lalezar text-xl md:text-3xl mt-10 mb-6">
        اضافه کردن <span className="text-blue-600">کاربر جدید</span>
      </h3>
      <form
        onSubmit={handleSubmit(createNewUserHandler)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                {...register("name")}
                placeholder="نام کاربر را وارد کنید ..."
                className="outline-none w-full bg-gray-100"
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#user"></use>
              </svg>
            </div>
            {errors.name && (
              <span className="absolute text-xs md:text-sm text-red-600 top-[42px] md:top-[54px] font-DanaDemiBold ">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                placeholder="نام کاربری کاربر را وارد کنید ..."
                {...register("username")}
                className="outline-none w-full bg-gray-100"
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#telegram"></use>
              </svg>
            </div>
            {errors.username && (
              <span className="absolute text-xs md:text-sm text-red-600 top-[42px] md:top-[54px] font-DanaDemiBold ">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                {...register("phone")}
                placeholder="شماره تلفن کاربر را وارد کنید ..."
                className="outline-none w-full bg-gray-100"
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#phone"></use>
              </svg>
            </div>
            {errors.phone && (
              <span className="absolute text-xs md:text-sm text-red-600 top-[42px] md:top-[54px] font-DanaDemiBold ">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                {...register("email")}
                placeholder="ایمیل کاربر را وارد کنید ..."
                className="outline-none w-full bg-gray-100"
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#envelope"></use>
              </svg>
            </div>
            {errors.email && (
              <span className="absolute text-xs md:text-sm text-red-600 top-[42px] md:top-[54px] font-DanaDemiBold ">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                {...register("password")}
                placeholder="رمز عبور کاربر را وارد کنید ..."
                className="outline-none w-full bg-gray-100"
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#lock"></use>
              </svg>
            </div>
            {errors.password && (
              <span className="absolute text-xs md:text-sm text-red-600 top-[42px] md:top-[54px] font-DanaDemiBold ">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#image"></use>
              </svg>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600  font-Lalezar p-2 w-[145px] rounded-md text-white text-base md:text-xl shadow-blue mt-6"
        >
          {isLoading ? <Sppiner isBtn={true} /> : "ایجاد کاربر جدید"}
        </button>
      </form>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"کاربر با موفقیت ساخته شد"}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setIsShowSuccessModal(false)}
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

export default AddNewUser;
