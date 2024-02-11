import React, { useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import EmptyError from "../../../../Components/UserPanel/EmptyError/EmptyError";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import useGetUsers from "../../../../Hooks/AdminPanel/User/useGetUsers";
import useBanUser from "../../../../Hooks/AdminPanel/User/useBanUser";
import { getUserToken } from "../../../../Utils/Funcs/utils";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import useDelete from "../../../../Hooks/AdminPanel/User/useDelete";
import Loader from "../../../../Components/Loader/Loader";
import DetailModal from "../../../../Components/DetailModal/DetailModal";
import useRole from "../../../../Hooks/AdminPanel/User/useRole";

function UsersList() {
  const [userId, setUserId] = useState(null);
  const [phone, setPhone] = useState(null);
  const [role, setRole] = useState("");
  const [isShowBanModal, setIsShowBanModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowRoleModal, setIsShowRoleModal] = useState(false);
  const [msg, setMsg] = useState(null);

  const { data: users, isLoading } = useGetUsers();
  const { mutateAsync: banUser } = useBanUser();
  const { mutateAsync: deleteUser } = useDelete();
  const { mutateAsync: changeUserRole } = useRole();

  const banUserHandler = async () => {
    const info = {
      id: userId,
      token: getUserToken(),
      phone,
    };
    const { status } = await banUser(info);
    if (status === 200) {
      setIsSuccessModal(true);
      setIsShowBanModal(false);
      setMsg("کاربر با موفقیت بن شد");
    }
  };

  const deleteUserHandler = async () => {
    const info = {
      id: userId,
      token: getUserToken(),
    };

    const result = await deleteUser(info);
    setIsShowDeleteModal(false);
    setIsSuccessModal(true);
    setMsg("کاربر با موفقیت حذف شد");
  };

  const changeUserRoleHandler = async () => {
    console.log("hhhh");
    const info = {
      token: getUserToken(),
      id: userId,
      role,
    };

    const result = await changeUserRole(info);
    if (result.ok) {
      setIsShowRoleModal(false);
      setIsSuccessModal(true);
      setMsg("نقش کاربر با موفقیت ویرایش شد");
      setRole("");
    }
  };
  return (
    <>
      <div className="pb-6">
        {isLoading ? (
          <div className=" bg-black/50 fixed inset-0 flex items-center justify-center z-50">
            <Loader />
          </div>
        ) : (
          <Table title={"لیست"} main={"کاربران"}>
            {users?.length ? (
              <table className="user-table mt-7">
                <thead className="">
                  <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                    <td>شماره</td>
                    <td>پروفایل</td>
                    <td>نام</td>
                    <td>نام کاربری</td>
                    <td>نقش</td>
                    <td>شماره</td>
                    <td>تاریخ</td>
                    <td>حذف</td>
                    <td>نقش</td>
                    <td>جزییات</td>
                    <td>ویرایش</td>
                    <td>بن</td>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  <>
                    {users?.map((user, index) => (
                      <tr
                        className="child:p-3 text-center font-DanaMedium"
                        key={user._id}
                      >
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
                        <td>
                          {user.role === "ADMIN" ? "ادمین" : "کاربر عادی"}
                        </td>
                        <td>{user.phone}</td>
                        {/* <td>{user.email}</td> */}
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
                              setIsShowRoleModal(true);
                              setUserId(user._id);
                            }}
                          >
                            نقش
                          </button>
                        </td>
                        <td>
                          <button className="bg-gray-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                            جزییات
                          </button>
                        </td>
                        <td>
                          <button className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                            ویرایش
                          </button>
                        </td>
                        <td>
                          <button
                            className="bg-pink-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                            onClick={() => {
                              setIsShowBanModal(true);
                              setUserId(user._id);
                              setPhone(user.phone);
                            }}
                          >
                            بن
                          </button>
                        </td>
                      </tr>
                    ))}
                  </>
                </tbody>
              </table>
            ) : (
              <EmptyError msg={"هیچ کاربری در سایت ثبت نام نکرده است"} />
            )}
          </Table>
        )}
      </div>
      {isShowBanModal && (
        <DeleteModal
          title={"آیا از بن کردن اطمینان دارید ؟"}
          onClose={() => setIsShowBanModal(false)}
          onClick={() => banUserHandler()}
        />
      )}
      {isSuccessModal && (
        <StatusModal
          onClose={setIsSuccessModal}
          title={msg}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setIsSuccessModal(false)}
        />
      )}
      {isShowDeleteModal && (
        <DeleteModal
          title={"آیا از حذف کردن اطمینان دارید ؟"}
          onClick={() => deleteUserHandler()}
          onClose={() => setIsShowDeleteModal(false)}
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
                className="outline-none w-full bg-gray-100"
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
    </>
  );
}

export default UsersList;
