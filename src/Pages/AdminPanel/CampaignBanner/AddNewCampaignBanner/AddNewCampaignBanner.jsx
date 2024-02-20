import React, { useId, useState } from "react";
import { banerSchema } from "./banerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useCreate from "../../../../Hooks/AdminPanel/Baner/useCreate";
import { getUserToken } from "../../../../Utils/Funcs/utils";
import Sppiner from "../../../../Components/Sppiner/Spinner";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import PageTitle from "../../../../Components/AdminPanel/PageTitle/PageTitle";
import Input from "../../../../Components/AdminPanel/Input/Input";

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
      <PageTitle key={useId()} main={"بنر"} desc={" اضافه کردن "} />
      <form
        onSubmit={handleSubmit(createBanerHandler)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <Input
            register={register}
            errors={errors}
            name={"title"}
            placeholder={"   عنوان بنر را وارد کنید .."}
            icon={"square"}
            type={"text"}
          />
        </div>
        <div className="flex items-center gap-x-5">
          <button className="bg-blue-600 w-[125px]  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
            {isLoading ? (
              <div className="ml-9">
                <Sppiner />
              </div>
            ) : (
              "ایجاد بنر"
            )}
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
