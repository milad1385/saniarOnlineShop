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
function Main() {
  const { setIsShowAdminMenu } = useContext(AppContext);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isShowSuccessModal , setIsShowSuccessModal] = useState(false);
  const [msg , setMsg] = useState("");
  const { mutateAsync: deleteUser } = useDelete();
  const { data: users, isLoading } = useLastestUser();

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
                        <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                          نقش
                        </button>
                      </td>
                      <td>
                        <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
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
    </>
  );
}

export default Main;
