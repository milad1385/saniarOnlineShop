import React, { useContext, useEffect, useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import EmptyError from "../../../../Components/UserPanel/EmptyError/EmptyError";
import useGetUsers from "../../../../Hooks/AdminPanel/User/useGetUsers";
import useBanUser from "../../../../Hooks/AdminPanel/User/useBanUser";
import { getSearchParam } from "../../../../Utils/Funcs/utils";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import useDelete from "../../../../Hooks/AdminPanel/User/useDelete";
import Loader from "../../../../Components/Loader/Loader";
import Pagination from "../../../../Components/Pagination/Pagination";
import { AppContext } from "../../../../App";
import Modal from "../../../../Components/Modal/Modal";
import ConfirmModal from "../../../../Components/ConfirmModal/ConfirmModal";
import EditUserForm from "../EditUserForm";
import ChangeUserRoleForm from "../ChangeUserRoleForm";
import UserDetailForm from "../UserDetailForm";
import TButton from "../../../../Components/AdminPanel/TButton/TButton";

function UsersList() {
  const { adminSearch, setAdminSearch } = useContext(AppContext);
  const [successInfo, setSuccessInfo] = useState({});

  const pageNum = getSearchParam("page");
  const [page, setPage] = useState(pageNum);

  useEffect(() => {
    setPage(pageNum || 1);
  }, [pageNum]);

  const { data: users, isLoading } = useGetUsers(page);
  const { mutateAsync: banUser, isLoading: isBanning } = useBanUser(
    setSuccessInfo,
    successInfo
  );
  const { mutateAsync: deleteUser, isLoading: isDeleting } =
    useDelete(setSuccessInfo);

  const banUserHandler = async (id, phone) => {
    const info = {
      id,
      phone,
    };
    await banUser(info);
  };

  const deleteUserHandler = async (id) => {
    await deleteUser(id);
  };

  const usersList = users?.users.filter((user) =>
    user.name.includes(adminSearch)
  );

  if (isLoading) return <Loader />;
  return (
    <>
      <div className="pb-6">
        <Table title={"لیست"} main={"کاربران"}>
          {users.users?.length ? (
            usersList?.length ? (
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
                    {usersList?.map((user, index) => (
                      <tr
                        className="child:p-2 md:child:p-3 text-center font-DanaMedium"
                        key={user._id}
                      >
                        <td>{index + 1}</td>
                        <td>
                          <div className="w-14 h-14  mx-auto bg-gray-200 rounded-full flex-center">
                            <img
                              src={`https://shoppingmilad.liara.run/uploads/covers/${user.image}`}
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
                        <td>{user.date}</td>
                        <td>
                          <Modal>
                            <Modal.Open name={"delete"}>
                              <TButton title={"حذف"} className="bg-red-600" />
                            </Modal.Open>
                            <Modal.Page name={"delete"}>
                              <ConfirmModal
                                title={"آیا از حذف کردن اطمینان دارید ؟"}
                                disable={isDeleting}
                                isConfirming={isDeleting}
                                onConfirm={() => deleteUserHandler(user._id)}
                              />
                            </Modal.Page>
                          </Modal>
                        </td>
                        <td>
                          <Modal>
                            <Modal.Open name={"role"}>
                              <TButton title={"نقش"} className="bg-amber-500" />
                            </Modal.Open>
                            <Modal.Page name={"role"}>
                              <ChangeUserRoleForm
                                user={user}
                                onInfo={setSuccessInfo}
                              />
                            </Modal.Page>
                          </Modal>
                        </td>
                        <td>
                          <Modal>
                            <Modal.Open name={"detail"}>
                              <TButton
                                title={"جزییات"}
                                className="bg-gray-600"
                              />
                            </Modal.Open>
                            <Modal.Page name={"detail"}>
                              <UserDetailForm detail={user} />
                            </Modal.Page>
                          </Modal>
                        </td>
                        <td>
                          <Modal>
                            <Modal.Open name={"edit"}>
                              <TButton
                                title={"ویرایش"}
                                className="bg-blue-600"
                              />
                            </Modal.Open>
                            <Modal.Page name={"edit"}>
                              <EditUserForm
                                user={user}
                                onInfo={setSuccessInfo}
                              />
                            </Modal.Page>
                          </Modal>
                        </td>
                        <td>
                          <Modal>
                            <Modal.Open name={"ban"}>
                              <TButton
                                title={"بن"}
                                className="bg-pink-600"
                              />
                            </Modal.Open>
                            <Modal.Page name={"ban"}>
                              <ConfirmModal
                                title={"آیا از بن کردن اطمینان دارید ؟"}
                                disable={isBanning}
                                isConfirming={isBanning}
                                onInfo={setSuccessInfo}
                                onConfirm={() =>
                                  banUserHandler(user._id, user.phone)
                                }
                              />
                            </Modal.Page>
                          </Modal>
                        </td>
                      </tr>
                    ))}
                  </>
                </tbody>
              </table>
            ) : (
              <div className="flex items-center justify-center flex-col w-full">
                <EmptyError
                  msg={`هیچ کاربری با نام ${adminSearch} وجود ندارد 🤐`}
                />
                <button
                  className="bg-blue-600 mx-auto  font-Lalezar p-2 w-[145px] rounded-md text-white text-base md:text-xl shadow-blue mt-6"
                  onClick={() => setAdminSearch("")}
                >
                  بروزرسانی
                </button>
              </div>
            )
          ) : (
            !isLoading && (
              <EmptyError msg={"هیچ کاربری در سایت ثبت نام نکرده است"} />
            )
          )}
        </Table>
        {!adminSearch && (
          <Pagination
            count={users?.paginatedNumber}
            page={page}
            setPage={setPage}
          />
        )}
      </div>

      {successInfo.title && (
        <StatusModal
          onClose={setSuccessInfo}
          title={successInfo.title}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setSuccessInfo(false)}
        />
      )}
    </>
  );
}

export default UsersList;
