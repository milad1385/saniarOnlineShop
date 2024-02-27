import React, { useState } from "react";
import useGetAllPro from "../../../../Hooks/AdminPanel/Product/useGetAllPro";
import { yupResolver } from "@hookform/resolvers/yup";
import { colorSchema } from "./colorSchema";
import { useForm } from "react-hook-form";
import Input from "../../../../Components/AdminPanel/Input/Input";
import Button from "../../../../Components/AdminPanel/Button/Button";
import PageTitle from "../../../../Components/AdminPanel/PageTitle/PageTitle";
import useCreate from "../../../../Hooks/AdminPanel/color/useCreate";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";

function AddNewColor() {
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const { data: products } = useGetAllPro();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(colorSchema) });

  const { mutateAsync: createNewColor , isLoading } = useCreate();

  const createNewColorHandler = async (data) => {
    const result = await createNewColor(data);
    if (result.status === 202) {
      setIsShowSuccessModal(true);
      clearInputs();
    }
  };

  const clearInputs = () => {
    setValue("product", "");
    setValue("colorName", "");
  };
  return (
    <>
      <PageTitle main={"رنگ"} desc={"اضافه کردن"} />
      <form
        onSubmit={handleSubmit(createNewColorHandler)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <Input
            register={register}
            errors={errors}
            icon={"square"}
            placeholder={"نام رنگ را وارد کنید ..."}
            name={"colorName"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            icon={"color-brush"}
            name={"colorCode"}
            type={"color"}
          />
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <select
                className="outline-none w-full bg-gray-100"
                {...register("product")}
              >
                <option value="">نام محصول را انتخاب کنید</option>
                {products?.map((product) => (
                  <option value={`${product._id}`}>{product.title}</option>
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
        <Button title={"ایجاد رنگ"} isLoading={isLoading} />
      </form>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"رنگ با موفقیت ساخته شد"}
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

export default AddNewColor;
