import React, { useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import EmptyError from "../../../../Components/UserPanel/EmptyError/EmptyError";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import useGetUsers from "../../../../Hooks/AdminPanel/User/useGetUsers";
import useBanUser from "../../../../Hooks/AdminPanel/User/useBanUser";
import { getUserToken } from "../../../../Utils/Funcs/utils";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import useDelete from "../../../../Hooks/AdminPanel/User/useDelete";

function UsersList() {
  const [userId, setUserId] = useState(null);
  const [phone, setPhone] = useState(null);
  const [isShowBanModal, setIsShowBanModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [msg, setMsg] = useState(null);
  const { data: users } = useGetUsers();
  const { mutateAsync: banUser } = useBanUser();
  const { mutateAsync: deleteUser, isLoading } = useDelete();

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
  return (
    <>
      <div className="pb-6">
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
                      <td>{user.role === "ADMIN" ? "ادمین" : "کاربر عادی"}</td>
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
                        <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
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
    </>
  );
}

export default UsersList;
