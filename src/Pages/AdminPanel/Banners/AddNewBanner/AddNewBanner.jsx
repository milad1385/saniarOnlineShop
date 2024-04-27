import React, { useId, useState } from "react";
import { Link } from "react-router-dom";
import { sliderSchema } from "./sliderSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Sppiner from "../../../../Components/Sppiner/Spinner";
import useCreateSlider from "../../../../Hooks/AdminPanel/sliders/useCreateSlider";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import PageTitle from "../../../../Components/AdminPanel/PageTitle/PageTitle";
import Input from "../../../../Components/AdminPanel/Input/Input";

function AddNewBanner() {
  const [image, setImage] = useState("");
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(sliderSchema) });

  const { mutateAsync: createNewSlider, isLoading } = useCreateSlider();

  const addNewSlider = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("link", data.link);
    formData.append("image", image);

    const result = await createNewSlider(formData);
    if (result.status === 200) {
      setIsShowSuccessModal(true);
      clearInputs();
    }
  };

  const clearInputs = () => {
    setValue("title", "");
    setValue("link", "");
  };
  return (
    <>
      <PageTitle key={useId()} main={"اسلایدر"} desc={" اضافه کردن "} />
      <form
        onSubmit={handleSubmit(addNewSlider)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <Input
            register={register}
            errors={errors}
            icon={"square"}
            name={"title"}
            placeholder={"   عنوان اسلایدر را وارد کنید ..."}
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
          <Input
            register={register}
            errors={errors}
            icon={"link"}
            placeholder={"  لینک اسلایدر را وارد کنید ..."}
            name={"link"}
            type={"text"}
          />
        </div>
        <div className="flex items-center gap-x-5">
          <button className="bg-blue-600 w-auto md:w-[125px]  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
            {isLoading ? (
              <div className="ml-9">
                <Sppiner />
              </div>
            ) : (
              "ایجاد اسلایدر"
            )}
          </button>
          <Link
            to={"campaign"}
            className="bg-amber-500  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl  mt-6"
          >
            ایجاد بنر
          </Link>
        </div>
      </form>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"اسلایدر با موفقیت ساخته شد"}
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

export default AddNewBanner;
