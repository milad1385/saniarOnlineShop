import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addressSchema } from "./addressSchema";
import Input from "../../../../Components/AdminPanel/Input/Input";
import Button from "../../../../Components/AdminPanel/Button/Button";
import useCreate from "../../../../Hooks/AdminPanel/static/address/useCreate";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import useGetAll from "../../../../Hooks/AdminPanel/static/address/useGetAll";

function ChangeAddress() {
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addressSchema) });

  const { mutateAsync: createAddress, isLoading } = useCreate();
  const { data: address } = useGetAll();

  const createAddressHandeler = async (data) => {
    const result = await createAddress(data);
    if (result.status === 202) {
      setIsShowSuccessModal(true);
    }
  };

  useEffect(() => {
    setDefaultValue();
  }, [address]);

  const setDefaultValue = () => {
    setValue("email", address?.length ? address[0]?.email : "در حال دریافت اطلاعات ...");
    setValue("address", address?.length ? address[0]?.address : "در حال دریافت اطلاعات ...");
    setValue("instagram", address?.length ? address[0]?.instagram : "در حال دریافت اطلاعات ...");
    setValue("telegram", address?.length ? address[0]?.telegram : "در حال دریافت اطلاعات ...");
    setValue("phone", address?.length ? address[0]?.phone : "در حال دریافت اطلاعات ...");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(createAddressHandeler)}
        className="bg-white mt-10 pt-3 pb-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <h3 className="font-Lalezar text-xl md:text-2xl mb-6">
          تغییر <span className="text-blue-600">آدرس ها</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <Input
            register={register}
            errors={errors}
            placeholder={"آدرس سایت را وارد کنید ..."}
            icon={"map"}
            name={"address"}
            type={"text"}
            // value={address?.length ? address[0]?.address : ""}
          />
          <Input
            register={register}
            errors={errors}
            placeholder={"ایمیل سایت را وارد کنید ..."}
            icon={"envelope"}
            name={"email"}
            type={"email"}
            // value={address?.length ? address[0]?.email : ""}
          />
          <Input
            register={register}
            errors={errors}
            placeholder={"آدرس تلگرام سایت را وارد کنید ..."}
            icon={"telegram"}
            name={"telegram"}
            type={"text"}
            // value={address?.length ? address[0]?.telegram : ""}
          />
          <Input
            register={register}
            errors={errors}
            placeholder={"آدرس اینستاگرام سایت را وارد کنید ..."}
            icon={"instagram"}
            name={"instagram"}
            type={"text"}
            // value={address?.length ? address[0]?.instagram : ""}
          />
          <Input
            register={register}
            errors={errors}
            placeholder={"تلفن سایت را وارد کنید .."}
            icon={"phone"}
            name={"phone"}
            type={"text"}
            // value={address?.length ? address[0]?.phone : ""}
          />
        </div>
        <Button title={"تغییر آدرس ها"} isLoading={isLoading} />
      </form>
      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"  آدرس با موفقیت ساخته شد"}
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

export default ChangeAddress;
