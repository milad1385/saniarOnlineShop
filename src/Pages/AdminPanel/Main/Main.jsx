import React, { useContext, useEffect, useState } from "react";
import Chart from "../../../Components/AdminPanel/Chart/Chart";
import Data from "../../../Components/AdminPanel/Chart/Data";
import Table from "../../../Components/AdminPanel/Table/Table";
import { AppContext } from "../../../App";
import useLastestUser from "../../../Hooks/AdminPanel/User/useLastestUser";
import EmptyError from "../../../Components/UserPanel/EmptyError/EmptyError";
import useDelete from "../../../Hooks/AdminPanel/User/useDelete";
import DeleteModal from "../../../Components/DeleteModal/DeleteModal";
import { getUserToken } from "../../../Utils/Funcs/utils";
import StatusModal from "../../../Components/SuccessModal/SuccessModal";
import DetailModal from "../../../Components/DetailModal/DetailModal";
import useRole from "../../../Hooks/AdminPanel/User/useRole";
import EditModal from "../../../Components/EditModal/EditModal";
import { registerSchema } from "../../Register/RegisterSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useEdit from "../../../Hooks/AdminPanel/User/useEdit";
function Main() {
  const { setIsShowAdminMenu } = useContext(AppContext);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowRoleModal, setIsShowRoleModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [role, setRole] = useState("");
  const [lastImage, setLastImage] = useState("");
  const [msg, setMsg] = useState("");
  const [image , setImage] = useState("");
  const { mutateAsync: deleteUser } = useDelete();
  const { mutateAsync: changeRole, isLoading: roleLoading } = useRole();
  const { data: users, isLoading } = useLastestUser();
  const { mutateAsync: editUser, isLoading: editLoading } = useEdit();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);

  const deleteUserHandler = async () => {
    const info = {
      id: userId,
      token: getUserToken(),
    };
    const result = await deleteUser(info);
    if (result.status === 200) {
      setIsShowDeleteModal(false);
      setIsShowSuccessModal(true);
      setMsg("کاربر با موفقیت حذف شد");
    }
  };

  const changeUserRoleHandler = async () => {
    const info = {
      id: userId,
      token: getUserToken(),
      role,
    };

    const result = await changeRole(info);
    if (result.ok) {
      setIsShowRoleModal(false);
      setIsShowSuccessModal(true);
      setMsg("نقش کاربر با موفقیت ویرایش شد");
      setRole("");
    }
  };

  const editUserHandler = (user) => {
    setIsShowEditModal(true);
    setUserId(user._id);
    setValue("name", user.name);
    setValue("username", user.username);
    setValue("email", user.email);
    setValue("password", user.password);
    setValue("phone", user.phone);
    setLastImage(user.image);
  };

  const submitEditUser = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phone", data.phone);
    formData.append("image", image);
    formData.append("lastImage", lastImage);
    const info = {
      token: getUserToken(),
      id: userId,
      body: formData,
    };
    const result = await editUser(info);
    if (result.status === 200) {
      setIsShowEditModal(false);
      setMsg("کاربر با موفقیت ویرایش شد");
      setIsShowSuccessModal(true);
      setImage("");
    }
  };

  return (
    <>
      <div className="container">
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-4 md:gap-x-8 mt-10 mx-auto place-items-center ">
          <div class="flex items-center gap-x-2.5 md:gap-x-4 w-[169px]  md:w-64 bg-amber-400  p-2 rounded-2xl">
            <div class="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
              <svg class="w-8 h-8 md:w-9 md:h-9 text-white">
                <use href="#user"></use>
              </svg>
            </div>
            <div class="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
              <span class="text-xs md:text-sm font-DanaMedium">
                ثبت نام شده ها
              </span>
              <span class="font-DanaDemiBold text-sm md:text-lg">5 نفر</span>
            </div>
          </div>
          <div class="flex items-center gap-x-2.5 md:gap-x-4 w-[169px]  md:w-64 bg-green-500  p-2 rounded-2xl">
            <div class="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
              <svg class="w-8 h-8 md:w-9 md:h-9 text-white">
                <use href="#money"></use>
              </svg>
            </div>
            <div class="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
              <span class="text-xs md:text-sm font-DanaMedium">
                مقدار در آمد
              </span>
              <span class="font-DanaDemiBold text-sm md:text-lg">
                25,402,000
              </span>
            </div>
          </div>
          <div class="flex items-center gap-x-2.5 md:gap-x-4 w-[169px]  md:w-64 bg-red-500  p-2 rounded-2xl">
            <div class="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
              <svg class="w-8 h-8 md:w-9 md:h-9 text-white">
                <use href="#chat-bubble-left-right"></use>
              </svg>
            </div>
            <div class="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
              <span class="text-xs md:text-sm font-DanaMedium">
                تعداد کامنت ها
              </span>
              <span class="font-DanaDemiBold text-sm md:text-lg">4 تا</span>
            </div>
          </div>
          <div class="flex items-center gap-x-2.5 md:gap-x-4 w-[169px]  md:w-64 bg-blue-600  p-2 rounded-2xl">
            <div class="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
              <svg class="w-8 h-8 md:w-9 md:h-9 text-white">
                <use href="#shopping-cart"></use>
              </svg>
            </div>
            <div class="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
              <span class="text-xs md:text-sm font-DanaMedium">تعداد فروش</span>
              <span class="font-DanaDemiBold text-sm md:text-lg">4 تا</span>
            </div>
          </div>
        </div>
        <Chart title={"میزان فروش"} grid data={Data} dataKey={"فروش"} />
        <div className="pb-8">
          {users?.length ? (
            <Table title={"آخرین"} main={"کاربران"}>
              <table className="user-table">
                <thead className="">
                  <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                    <td>شماره</td>
                    <td>پروفایل</td>
                    <td>نام</td>
                    <td>نام کاربری</td>
                    <td>نقش</td>
                    <td>شماره</td>
                    <td>ایمیل</td>
                    <td>تاریخ</td>
                    <td>حذف</td>
                    <td>نقش</td>
                    <td>ویرایش</td>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  {users?.map((user, index) => (
                    <tr className="child:p-3 text-center font-DanaMedium">
                      <td>{index + 1}</td>
                      <td>
                        <div className="w-14 h-14  mx-auto bg-gray-200 rounded-full flex-center">
                          <img
                            src={`http://localhost:3001/uploads/covers/${user.image}`}
                            className="w-12 h-12 rounded-full"
                          />
                        </div>
                      </td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.role === "ADMIN" ? "ادمین" : "کاربر عادی"}</td>
                      <td>{user.phone}</td>
                      <td>{user.email}</td>
                      <td>{user.date}</td>
                      <td>
                        <button
                          className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          onClick={() => {
                            setIsShowDeleteModal(true);
                            setUserId(user._id);
                          }}
                        >
                          حذف
                        </button>
                      </td>
                      <td>
                        <button
                          className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          onClick={() => {
                            setUserId(user._id);
                            setIsShowRoleModal(true);
                            setRole(user.role);
                          }}
                        >
                          نقش
                        </button>
                      </td>
                      <td>
                        <button
                          className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          onClick={() => editUserHandler(user)}
                        >
                          ویرایش
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Table>
          ) : (
            <EmptyError msg={"تاکنون کاربری در سایت ثبت نام نکرده است"} />
          )}
        </div>
      </div>

      {isShowDeleteModal && (
        <DeleteModal
          title={"آیا از حذف کردن اطمینان دارید ؟"}
          onClick={() => deleteUserHandler()}
          onClose={() => setIsShowDeleteModal(false)}
        />
      )}
      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={msg}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setIsShowSuccessModal(false)}
        />
      )}
      {isShowRoleModal && (
        <DetailModal onClose={setIsShowRoleModal}>
          <div className="bg-white w-[350px] px-5 pt-4 pb-6 space-y-5 font-MorabbaBold">
            <h3 className="text-center  text-lg md:text-2xl lg:text-3xl">
              نقش جدید را وارد کنید
            </h3>
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3">
              <input
                type="text"
                placeholder="نقش کاربر را وارد کنید ..."
                className="outline-none w-full bg-gray-100 font-DanaMedium"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#user"></use>
              </svg>
            </div>
            <button
              className="bg-blue-600 text-white flex-center w-full py-3 text-base md:text-lg lg:text-xl"
              onClick={changeUserRoleHandler}
            >
              ویرایش نقش
            </button>
          </div>
        </DetailModal>
      )}
      {isShowEditModal && (
        <EditModal onClose={setIsShowEditModal}>
          <form
            onSubmit={handleSubmit(submitEditUser)}
            className="mt-10 flex items-center justify-center flex-col gap-6 child:rounded-sm"
          >
            <div className="w-full">
              <div className="bg-gray-100 flex items-center gap-x-2 py-2 px-3 w-full">
                <svg className="w-6 h-6">
                  <use href="#user"></use>
                </svg>
                <input
                  type="text"
                  placeholder="نام جدید کاربر را وارد کنید..."
                  {...register("name")}
                  className="w-full text-sm md:text-base bg-transparent outline-none"
                />
              </div>
              {errors.name && (
                <span className="absolute  text-red-600 font-DanaMedium text-xs md:text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <div className="bg-gray-100 flex items-center gap-x-2 py-2 px-3 w-full">
                <svg className="w-6 h-6">
                  <use href="#life-style"></use>
                </svg>
                <input
                  type="text"
                  autoComplete="false"
                  placeholder="نام کاربری کاربر جدید را وارد کنید..."
                  {...register("username")}
                  className="w-full text-sm md:text-base bg-transparent outline-none"
                />
              </div>
              {errors.username && (
                <span className="absolute  text-red-600 font-DanaMedium text-xs md:text-sm">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <div className="bg-gray-100 flex items-center gap-x-2 py-2 px-3 w-full">
                <svg className="w-6 h-6">
                  <use href="#phone"></use>
                </svg>
                <input
                  type="text"
                  {...register("phone")}
                  placeholder="شماره تلفن جدید کاربر را وارد کنید..."
                  className="w-full text-sm md:text-base bg-transparent outline-none"
                />
              </div>
              {errors.phone && (
                <span className="absolute  text-red-600 font-DanaMedium text-xs md:text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <div className="bg-gray-100 flex items-center gap-x-2 py-2 px-3 w-full">
                <svg className="w-6 h-6">
                  <use href="#envelope"></use>
                </svg>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="ایمیل جدید کاربر را وارد کنید..."
                  className="w-full text-sm md:text-base bg-transparent outline-none"
                />
              </div>
              {errors.email && (
                <span className="absolute  text-red-600 font-DanaMedium text-xs md:text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <div className="bg-gray-100 flex items-center gap-x-2 py-2 px-3 w-full">
                <svg className="w-6 h-6">
                  <use href="#lock"></use>
                </svg>
                <input
                  type="text"
                  {...register("password")}
                  placeholder="رمز عبور جدید کاربر را وارد کنید..."
                  className="w-full text-sm md:text-base bg-transparent outline-none"
                />
              </div>
              {errors.password && (
                <span className="absolute  text-red-600 font-DanaMedium text-xs md:text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <div className="bg-gray-100 flex items-center gap-x-2 py-2 px-3 w-full">
                <svg className="w-6 h-6">
                  <use href="#image"></use>
                </svg>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-blue-600 text-white text-xl font-MorabbaBold py-3"
            >
              {editLoading ? "در حال ویرایش ..." : "ویرایش اطلاعات"}
            </button>
          </form>
        </EditModal>
      )}
    </>
  );
}

export default Main;
