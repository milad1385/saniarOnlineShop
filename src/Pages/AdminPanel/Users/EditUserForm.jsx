import React, { useState } from "react";
import Input from "../../../Components/AdminPanel/Input/Input";
import useEdit from "../../../Hooks/AdminPanel/User/useEdit";
import { registerSchema } from "../../Register/RegisterSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function EditUserForm({ user, onInfo, onClose }) {
  const [image, setImage] = useState({});

  const { mutateAsync: editUser, isLoading: isEditting } = useEdit(
    onClose,
    onInfo
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: user ? user : {},
  });

  const submitEditUser = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phone", data.phone);
    formData.append("image", image);
    formData.append("lastImage", user.image);
    const info = {
      id: user._id,
      body: formData,
    };
    await editUser(info);
  };
  return (
    <div className="bg-white pb-6 pt-4 px-5  w-[93%] md:w-[425px] mx-auto">
      <h3 className="font-MorabbaBold text-lg md:text-3xl text-center mt-3">
        اطلاعات جدید کاربر را بنویسید
      </h3>
      <form
        onSubmit={handleSubmit(submitEditUser)}
        className="mt-10 flex items-center justify-center flex-col gap-6 child:rounded-sm"
      >
        <Input
          register={register}
          errors={errors}
          icon={"user"}
          placeholder={"نام کاربر را وارد کنید ..."}
          type="text"
          name={"name"}
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
        <div className="relative w-full">
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#image"></use>
            </svg>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-blue-600 text-white text-xl font-MorabbaBold py-3"
        >
          {isEditting ? "در حال ویرایش ..." : "ویرایش اطلاعات"}
        </button>
      </form>
    </div>
  );
}

export default EditUserForm;
