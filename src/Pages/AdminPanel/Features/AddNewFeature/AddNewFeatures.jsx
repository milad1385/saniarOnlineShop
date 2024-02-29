import React, { useState } from "react";
import { featureSchema } from "./featureSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import PageTitle from "../../../../Components/AdminPanel/PageTitle/PageTitle";
import Input from "../../../../Components/AdminPanel/Input/Input";
import Button from "../../../../Components/AdminPanel/Button/Button";
import useGetAllPro from "../../../../Hooks/AdminPanel/Product/useGetAllPro";
import useCreate from "../../../../Hooks/AdminPanel/feature/useCreate";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";

function AddNewFeatures() {
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(featureSchema) });

  const { data: products } = useGetAllPro();
  const { mutateAsync: createNewFeature, isLoading } = useCreate();

  const createNewFeatureHandler = async (data) => {
    const result = await createNewFeature(data);
    if (result.status === 200) {
      setIsShowSuccessModal(true);
      clearInputs();
    }
  };

  const clearInputs = () => {
    setValue("featureName", "");
    setValue("featureValue", "");
    setValue("product", "");
  };
  return (
    <>
      <PageTitle main={"ویژگی جدید"} desc={"اضافه کردن"} />
      <form
        onSubmit={handleSubmit(createNewFeatureHandler)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <Input
            register={register}
            errors={errors}
            icon={"square"}
            name={"featureName"}
            placeholder={"نام ویژگی را وارد کنید ..."}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            icon={"life-style"}
            name={"featureValue"}
            placeholder={"مقدار ویژگی را وارد کنید ..."}
            type={"text"}
          />
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <select
                className="outline-none w-full bg-gray-100"
                {...register("product")}
              >
                <option value="">نام محصول را انتخاب کنید</option>
                {products?.map((product) => (
                  <option value={product._id}>{product.title}</option>
                ))}
              </select>
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#shop-card"></use>
              </svg>
            </div>
            {errors.product && (
              <span className="absolute text-xs md:text-sm text-red-600 top-[42px] md:top-[54px] font-DanaDemiBold ">
                {errors.product.message}
              </span>
            )}
          </div>
        </div>
        <Button title={"ایجاد ویژگی"} isLoading={isLoading} />
      </form>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"ویژگی با موفقیت ساخته شد"}
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

export default AddNewFeatures;
