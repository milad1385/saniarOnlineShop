import React, { useId, useState } from "react";
import PageTitle from "../../../../Components/AdminPanel/PageTitle/PageTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "./categorySchema";
import useCreate from "../../../../Hooks/AdminPanel/Category/useCreate";
import Input from "../../../../Components/AdminPanel/Input/Input";
import Sppiner from "../../../../Components/Sppiner/Spinner";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";

function AddNewCategory() {
  const [image, setImage] = useState({});
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(categorySchema) });

  const { mutateAsync: createNewCategory, isLoading } = useCreate();

  const createNewCategoryHandler = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("link", data.link);
    formData.append("image", image);

    const result = await createNewCategory(formData);

    if (result.status === 200) {
      clearInputs();
      setIsShowSuccessModal(true);
    }
  };

  const clearInputs = () => {
    setValue("title", "");
    setValue("link", "");
    setImage("");
  };
  return (
    <>
      <PageTitle key={useId()} main={"دسته بندی"} desc={" اضافه کردن "} />
      <form
        onSubmit={handleSubmit(createNewCategoryHandler)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
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
        <button className="bg-blue-600 w-[145px]  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
          {isLoading ? (
            <div className="ml-9">
              <Sppiner />
            </div>
          ) : (
            "ایجاد دسته بندی"
          )}
        </button>
      </form>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"دسته بندی با موفقیت ساخته شد"}
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

export default AddNewCategory;
