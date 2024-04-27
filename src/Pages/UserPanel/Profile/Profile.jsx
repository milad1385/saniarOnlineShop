import React, { useEffect, useState } from "react";
import PageTitle from "../../../Components/UserPanel/PageTitle/PageTitle";
import Button from "../../../Components/Button/Button";
import useGetMe from "../../../Hooks/useGetMe/useGetMe";
import { getUserToken } from "../../../Utils/Funcs/utils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./../../Register/RegisterSchema";
import Input from "../../../Components/AdminPanel/Input/Input";
import { getUserInfo } from "../../../services/userApi";
import useEdit from "../../../Hooks/AdminPanel/User/useEdit";
import StatusModal from "../../../Components/SuccessModal/SuccessModal";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userId, setUserId] = useState(null);
  const [currImage, setCurrImage] = useState(null);
  const [image, setImage] = useState(null);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const { data: userInfo, isLoading: loadingInfo } = useGetMe(getUserToken());
  const { mutateAsync: editUser, isLoading: editLoading } = useEdit();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: async () => {
      const result = await getUserInfo(getUserToken());
      setUserId(result.userInfo._id);
      return {
        name: result.userInfo.name,
        username: result.userInfo.username,
        phone: result.userInfo.phone,
        email: result.userInfo.email,
        password: result.userInfo.password,
      };
    },
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const editUserInfo = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phone", data.phone);
    formData.append("image", image);
    formData.append("lastImage", userInfo?.userInfo.image);
    const info = {
      token: getUserToken(),
      id: userId,
      body: formData,
    };
    const result = await editUser(info);
    if (result.status === 200) {
      setIsShowSuccessModal(true);
    }
  };

  const handleUploadProfile = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setCurrImage(URL.createObjectURL(file));
    }
  };

  let style = `bg-white`;
  return (
    <>
      <PageTitle icon={"home"} title={"پروفایل من"} />
      <form onSubmit={handleSubmit(editUserInfo)} className="p-3.5 pt-8">
        <div className="relative mb-11 flex-center">
          <img
            src={
              currImage
                ? currImage
                : userInfo?.userInfo.image
                ? `http://localhost:3001/uploads/covers/${userInfo?.userInfo.image}`
                : "/images/user.png"
            }
            className="w-32 md:w-44 h-32 md:h-44 rounded-full"
          />
          <input
            type="file"
            id="uploader"
            className="hidden"
            onChange={handleUploadProfile}
          />
          <label
            htmlFor="uploader"
            className="absolute bottom-0  right-[120px] md:right-[435px] flex-center w-10 md:w-14 h-10 md:h-14 rounded-full bg-blue-600  border-2 md:border-4 border-white  cursor-pointer transition-colors"
          >
            <svg className="w-5 md:w-6 h-5 md:h-6 text-white">
              <use href="#arrow-path-rounded-square"></use>
            </svg>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 child:flex child:flex-col">
          <div>
            <label
              for="email"
              className="font-DanaDemiBold text-sm md:text-base text-zinc-700 dark:text-white"
            >
              شماره همراه
            </label>
            <Input
              register={register}
              errors={errors}
              InputStyle={style}
              name={"phone"}
              type={"text"}
              className={
                "rounded-md overflow-hidden mt-3.5 text-sm md:text-base"
              }
            />
          </div>
          <div>
            <label
              for="first_name"
              className="font-DanaDemiBold text-sm md:text-base text-zinc-700 dark:text-white"
            >
              نام
            </label>
            <Input
              register={register}
              errors={errors}
              InputStyle={style}
              name={"name"}
              type={"text"}
              className={
                "rounded-md overflow-hidden mt-3.5 text-sm md:text-base"
              }
            />
          </div>
          <div>
            <label
              for="email"
              className="font-DanaDemiBold text-sm md:text-base text-zinc-700 dark:text-white"
            >
              نام کاربری
            </label>
            <Input
              register={register}
              errors={errors}
              InputStyle={style}
              name={"username"}
              type={"text"}
              className={
                "rounded-md overflow-hidden mt-3.5 text-sm md:text-base"
              }
            />
          </div>
          <div>
            <label
              for="email"
              className="font-DanaDemiBold text-sm md:text-base text-zinc-700 dark:text-white"
            >
              ایمیل
            </label>
            <Input
              register={register}
              errors={errors}
              InputStyle={style}
              name={"email"}
              type={"email"}
              className={
                "rounded-md overflow-hidden mt-3.5 text-sm md:text-base"
              }
            />
          </div>
          <div>
            <label
              for="email"
              className="font-DanaDemiBold text-sm md:text-base text-zinc-700 dark:text-white"
            >
              رمز عبور
            </label>
            <Input
              register={register}
              errors={errors}
              InputStyle={style}
              name={"password"}
              type={"password"}
              className={
                "rounded-md overflow-hidden mt-3.5 text-sm md:text-base"
              }
            />
          </div>
        </div>
        <div className="mt-10">
          <Button
            title={`${editLoading ? "در حال ویرایش" : "ثبت اطلاعات"}`}
            icon={"edit"}
            className=" w-full md:w-auto"
            onClick={editUserInfo}
          />
        </div>
      </form>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"اطلاعات با موفقیت ویرایش شد"}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => {
            navigate("/");
            location.reload();
          }}
        />
      )}
    </>
  );
}

export default Profile;
