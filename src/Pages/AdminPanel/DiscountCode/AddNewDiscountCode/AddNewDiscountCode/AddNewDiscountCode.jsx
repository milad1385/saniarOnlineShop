import React, { useId, useState } from "react";
import PageTitle from "../../../../../Components/AdminPanel/PageTitle/PageTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { discountSchema } from "./discount";
import Input from "../../../../../Components/AdminPanel/Input/Input";
import useGetAllPro from "../../../../../Hooks/AdminPanel/Product/useGetAllPro";
import useCreate from "../../../../../Hooks/AdminPanel/discount/useCreate";
import StatusModal from "../../../../../Components/SuccessModal/SuccessModal";
function AddNewDiscountCode() {
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const { data: products } = useGetAllPro();
  const { mutateAsync: createDiscountCode, isLoading } = useCreate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(discountSchema),
  });

  const createNewDiscount = async (data) => {
    const result = await createDiscountCode(data);
    if (result.status === 201) {
      reset();
      setIsShowSuccessModal(true);
    }
  };
  return (
    <>
      <PageTitle key={useId()} main={"کد تخفیف"} desc={" اضافه کردن "} />
      <form
        onSubmit={handleSubmit(createNewDiscount)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <div>
            <Input
              register={register}
              errors={errors}
              name={"code"}
              placeholder={"کد تخفیف را وارد کنید ..."}
              icon={"square"}
              type={"text"}
            />
          </div>
          <div>
            <Input
              register={register}
              errors={errors}
              name={"percent"}
              placeholder={"درصد کد تخفیف را وارد کنید..."}
              icon={"life-style"}
              type={"text"}
            />
          </div>
          <div>
            <Input
              register={register}
              errors={errors}
              name={"maxUsage"}
              placeholder={"حداکثر استفاده کد تخفیف را وارد کنید..."}
              icon={"gift"}
              type={"text"}
            />
          </div>
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <select
                className="outline-none w-full bg-gray-100"
                {...register("product")}
              >
                <option value={""}>نام محصول را انتخاب کنید</option>
                {products?.map((product) => (
                  <option key={product._id} value={`${product._id}`}>
                    {product.title}
                  </option>
                ))}
              </select>
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#city"></use>
              </svg>
            </div>
            {errors.product && (
              <span className="absolute text-xs md:text-sm text-red-600  font-DanaDemiBold ">
                {errors.product.message}
              </span>
            )}
          </div>
        </div>
        <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
          ایجاد کد تخفیف
        </button>
      </form>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"کد تخفیف با موفقیت ساخته شد"}
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

export default AddNewDiscountCode;
