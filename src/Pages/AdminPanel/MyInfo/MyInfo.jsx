import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../../App";
import { getUserToken } from "../../../Utils/Funcs/utils";
import Sppiner from "./../../../Components/Sppiner/Spinner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../Register/RegisterSchema";
import { getUserInfo } from "../../../services/userApi";
import StatusModal from "../../../Components/SuccessModal/SuccessModal";
import useEdit from "../../../Hooks/AdminPanel/User/useEdit";
import useGetMe from "../../../Hooks/useGetMe/useGetMe";

function MyInfo() {
  const { setIsShowAdminMenu } = useContext(AppContext);
  const [isShowErrModal, setIsShowErrModal] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [msg, setMsg] = useState("");
  const [image, setImage] = useState({});
  const [adminId , setAdminId] = useState("");
  
  const {data : userInfo} = useGetMe(getUserToken());

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: async () => {
      const result = await getUserInfo(getUserToken());
      setAdminId(result.userInfo._id)
      return {
        name: result.userInfo.name,
        username: result.userInfo.username,
        phone: result.userInfo.phone,
        email: result.userInfo.email,
        password: result.userInfo.password,
      };
    },
  });

  const { mutateAsync: editUser, isLoading: editLoading } = useEdit();

  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);

  const editMyInfoHandler = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phone", data.phone);
    formData.append("image", image);
    formData.append("lastImage", userInfo?.userInfo.image);
    const info = {
      token: getUserToken(),
      id: adminId,
      body: formData,
    };
    const result = await editUser(info);
    if (result.status === 200) {
      setMsg("کاربر با موفقیت ویرایش شد");
      setIsShowSuccessModal(true);
      setImage({});
    } else {
      setMsg("ویرایش با خطا مواجه شد");
      setIsShowErrModal(true);
    }
  };
  return (
    <>
      <div className="container pb-5">
        <h3 className="font-Lalezar text-xl md:text-3xl mt-10 mb-6">
          ویرایش <span className="text-blue-600">اطلاعات من</span>
        </h3>
        <div className="relative my-16 flex-center">
          <img
            src={
              userInfo?.userInfo.image
                ? `http://localhost:3001/uploads/covers/${userInfo?.userInfo.image}`
                : "/images/user.png"
            }
            className="w-32 md:w-44 h-32 md:h-44 rounded-full"
          />
          <input
            type="file"
            id="uploader"
            className="hidden"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <label
            htmlFor="uploader"
            className="absolute bottom-0  right-[120px] md:right-[510px] flex-center w-10 md:w-14 h-10 md:h-14 rounded-full bg-blue-600  border-2 md:border-4 border-white  cursor-pointer transition-colors"
          >
            <svg className="w-5 md:w-6 h-5 md:h-6 text-white">
              <use href="#arrow-path-rounded-square"></use>
            </svg>
          </label>
        </div>
        <form
          onSubmit={handleSubmit(editMyInfoHandler)}
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
                  type="password"
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
          </div>
          <button
            type="submit"
            className="bg-blue-600  font-Lalezar p-2 w-[145px] rounded-md text-white text-base md:text-xl shadow-blue mt-6"
          >
            {false ? <Sppiner isBtn={true} /> : "ویرایش اطلاعات"}
          </button>
        </form>
      </div>
      {isShowErrModal && (
        <StatusModal
          onClose={setIsShowErrModal}
          title={msg}
          text={"تلاش مجدد !"}
          icon={"face-frown"}
          color="text-red-600"
          bg="bg-red-600"
          onClick={() => setIsShowErrModal(false)}
        />
      )}
      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={msg}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setIsShowSuccessModal(false)}
        />
      )}
    </>
  );
}

export default MyInfo;
