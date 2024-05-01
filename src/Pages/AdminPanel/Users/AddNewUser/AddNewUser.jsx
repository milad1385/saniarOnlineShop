import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Sppiner from "../../../../Components/Sppiner/Spinner";
import useRegister from "../../../../Hooks/useRegister/useRegister";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import { registerSchema } from "../../../../Pages/Register/RegisterSchema";
import PageTitle from "../../../../Components/AdminPanel/PageTitle/PageTitle";
import Input from "../../../../Components/AdminPanel/Input/Input";

function AddNewUser() {
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
    const result = await registerNewUser(data);
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
      <PageTitle key={useId()} main={"کاربر جدید"} desc={"اضافه کردن"} />
      <form
        onSubmit={handleSubmit(createNewUserHandler)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <Input
            register={register}
            errors={errors}
            icon={"user"}
            placeholder={"نام کاربر را وارد کنید ..."}
            type="text"
            name="name"
          />
          <Input
            register={register}
            errors={errors}
            placeholder={"نام کاربری کاربر را وارد کنید ..."}
            icon={"telegram"}
            type={"text"}
            name={"username"}
          />
          <Input
            register={register}
            errors={errors}
            placeholder={"شماره تلفن کاربر را وارد کنید ..."}
            icon={"phone"}
            type={"text"}
            name={"phone"}
          />
          <Input
            register={register}
            errors={errors}
            placeholder={"ایمیل کاربر را وارد کنید ..."}
            icon={"envelope"}
            type={"email"}
            name={"email"}
          />
          <Input
            register={register}
            errors={errors}
            placeholder={"رمز عبور کاربر را وارد کنید ..."}
            icon={"lock"}
            type={"password"}
            name={"password"}
          />
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
