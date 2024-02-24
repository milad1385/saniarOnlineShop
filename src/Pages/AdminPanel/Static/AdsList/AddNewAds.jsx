import React, { useState } from "react";
import { advertismentSchema } from "./adsSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../../../../Components/AdminPanel/Input/Input";
import Button from "../../../../Components/AdminPanel/Button/Button";
import useCreate from "../../../../Hooks/AdminPanel/static/ads/useCreate";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";

function AddNewAds() {
  const [image, setImage] = useState({});
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(advertismentSchema) });

  const { mutateAsync: createNewAds, isLoading } = useCreate();

  const createNewAdsHandlers = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("desc", data.desc);
    formData.append("image", image);

    const result = await createNewAds(formData);
    if (result.status === 202) {
      clearInputs();
      setIsShowSuccessModal(true);
    }
  };

  const clearInputs = () => {
    setValue("title", "");
    setValue("desc", "");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(createNewAdsHandlers)}
        className="bg-white mt-10 pt-3 pb-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <h3 className="font-Lalezar text-xl md:text-2xl mb-6">
          ایجاد <span className="text-blue-600">شعار ها</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <Input
            register={register}
            errors={errors}
            icon={"article"}
            name={"title"}
            placeholder={"عنوان شعار سایت را وارد کنید ..."}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            icon={"square"}
            name={"desc"}
            placeholder={"توضیحات شعار سایت را وارد کنید ..."}
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
        <Button title={"ایجاد شعار"} isLoading={isLoading} />
      </form>
      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"  شعار با موفقیت ساخته شد"}
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

export default AddNewAds;
