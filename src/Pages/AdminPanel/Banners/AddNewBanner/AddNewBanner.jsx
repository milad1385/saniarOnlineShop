import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sliderSchema } from "./sliderSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Sppiner from "../../../../Components/Sppiner/Spinner";
import useCreateSlider from "../../../../Hooks/AdminPanel/sliders/useCreateSlider";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";

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
      <h3 className="font-Lalezar text-xl md:text-3xl mt-10 mb-6">
        اضافه کردن <span className="text-blue-600">اسلایدر</span>
      </h3>
      <form
        onSubmit={handleSubmit(addNewSlider)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                placeholder="   عنوان اسلایدر را وارد کنید ..."
                className="outline-none w-full bg-gray-100"
                {...register("title")}
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#square"></use>
              </svg>
            </div>
            {errors.title && (
              <span className="absolute text-xs md:text-sm text-red-600 top-[42px] md:top-[54px] font-DanaDemiBold ">
                {errors.title.message}
              </span>
            )}
          </div>
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
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                placeholder="  لینک اسلایدر را وارد کنید ..."
                className="outline-none w-full bg-gray-100"
                {...register("link")}
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#link"></use>
              </svg>
            </div>
            {errors.link && (
              <span className="absolute text-xs md:text-sm text-red-600 top-[42px] md:top-[54px] font-DanaDemiBold ">
                {errors.link.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <button className="bg-blue-600  w-[125px]  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
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
