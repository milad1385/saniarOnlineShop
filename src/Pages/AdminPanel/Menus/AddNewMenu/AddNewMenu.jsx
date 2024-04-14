import React, { useId, useState } from "react";
import PageTitle from "../../../../Components/AdminPanel/PageTitle/PageTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { menuSchema } from "./menuSchema";
import Input from "../../../../Components/AdminPanel/Input/Input";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import useCreate from "../../../../Hooks/AdminPanel/menu/useCreate";
import useGet from "../../../../Hooks/AdminPanel/menu/useGet";

function AddNewMenu() {
  const [parent, setParent] = useState(null);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const { mutateAsync: createMenu, isLoading } = useCreate();
  const { data: menus } = useGet();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(menuSchema) });

  const createMenuHandler = async (data) => {
    const info = {
      ...data,
      parent,
    };
    const result = await createMenu(info);
    if (result.status === 201) {
      setIsShowSuccessModal(true);
      reset();
      setParent("");
    }
  };
  return (
    <>
      <PageTitle key={useId()} main={"منو"} desc={" اضافه کردن "} />
      <form
        onSubmit={handleSubmit(createMenuHandler)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <Input
            register={register}
            errors={errors}
            name={"name"}
            placeholder={"  نام منو را وارد کنید ..."}
            icon={"square"}
          />
          <Input
            register={register}
            errors={errors}
            name={"link"}
            placeholder={"لینک منو را وارد کنید..."}
            icon={"link"}
          />
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <select
              onChange={(e) => setParent(e.target.value)}
              className="outline-none w-full bg-gray-100"
            >
              <option value="">پرنت منو را انتخاب کنید</option>
              {menus?.parent.map((menu) => (
                <option key={menu._id} value={menu._id}>
                  {menu.name}
                </option>
              ))}
            </select>
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#shop-card"></use>
            </svg>
          </div>
        </div>
        <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
          ایجاد منو
        </button>
      </form>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"منو با موفقیت ساخته شد"}
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

export default AddNewMenu;
