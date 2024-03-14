import React, { useState } from "react";
import Input from "../../../Components/AdminPanel/Input/Input";
import useEdit from "../../../Hooks/AdminPanel/Category/useEdit";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "./AddNewCategory/categorySchema";
import { useForm } from "react-hook-form";
import { getUserToken } from "../../../Utils/Funcs/utils";
import Sppiner from "../../../Components/Sppiner/Spinner";

function EditModal({ categoryInfo, onClose, onInfo }) {
  const [image, setImage] = useState("");
  const { mutateAsync: editCategory, isLoading } = useEdit(onClose, onInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categorySchema),
    defaultValues: categoryInfo ? categoryInfo : {},
  });

  const updateCategory = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("link", data.link);
    formData.append("image", image);
    formData.append("lastImage", categoryInfo.image);

    const info = {
      id: categoryInfo._id,
      token: getUserToken(),
      data: formData,
    };

    await editCategory(info);
  };

  return (
    <div className="bg-white pb-6 pt-4 px-5  w-[93%] md:w-[425px] mx-auto">
      <h3 className="font-MorabbaBold text-lg md:text-3xl text-center mt-3">
        اطلاعات دسته بندی را بنویسید
      </h3>
      <form
        onSubmit={handleSubmit(updateCategory)}
        className="bg-white rounded-md  font-Dana text-zinc-700 mt-5"
      >
        <div className="grid grid-cols-1 gap-y-6 text-sm md:text-base">
          <Input
            register={register}
            placeholder={"نام دسته بندی را وارد کنید ..."}
            errors={errors}
            name={"title"}
            icon={"square"}
            type={"text"}
          />
          <Input
            register={register}
            placeholder={"نام لینک را وارد کنید ..."}
            errors={errors}
            name={"link"}
            icon={"link"}
            type={"text"}
          />
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="file"
              className="outline-none w-full bg-gray-100"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#image"></use>
            </svg>
          </div>
        </div>
        <button className="bg-blue-600 w-full  font-MorabbaBold px-2 py-3 text-white text-sm md:text-xl shadow-blue mt-6">
          {isLoading ? (
            <div className="ml-9">
              <Sppiner />
            </div>
          ) : (
            "ویرایش دسته بندی"
          )}
        </button>
      </form>
    </div>
  );
}

export default EditModal;
