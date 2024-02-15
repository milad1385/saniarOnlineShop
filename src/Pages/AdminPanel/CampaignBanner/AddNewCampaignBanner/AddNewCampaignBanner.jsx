import React, { useState } from "react";
import { banerSchema } from "./banerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useCreate from "../../../../Hooks/AdminPanel/Baner/useCreate";
import { getUserToken } from "../../../../Utils/Funcs/utils";
import Sppiner from "../../../../Components/Sppiner/Spinner";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";

function AddNewCampaignBanner() {
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(banerSchema) });

  const { mutateAsync: createBaner, isLoading } = useCreate();

  const createBanerHandler = async (data) => {
    const info = {
      token: getUserToken(),
      title: data.title,
    };

    const result = await createBaner(info);
    if (result.status === 200) {
      setValue("title", "");
      setIsShowSuccessModal(true);
    }
  };

  return (
    <>
      <h3 className="font-Lalezar text-xl md:text-3xl mt-10 mb-6">
        اضافه کردن <span className="text-blue-600">بنر</span>
      </h3>
      <form
        onSubmit={handleSubmit(createBanerHandler)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <input
                type="text"
                placeholder="   عنوان بنر را وارد کنید ..."
                {...register("title")}
                className="outline-none w-full bg-gray-100"
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
        </div>
        <div className="flex items-center gap-x-5">
          <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
            {isLoading ? <Sppiner /> : "ایجاد بنر"}
          </button>
        </div>
      </form>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"بنر با موفقیت ساخته شد"}
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

export default AddNewCampaignBanner;
