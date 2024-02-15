import React, { useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import useGetAllBaner from "../../../../Hooks/AdminPanel/Baner/useGetAllBaner";
import EmptyError from "../../../../Components/UserPanel/EmptyError/EmptyError";
import Loader from "../../../../Components/Loader/Loader";
import useDeleteBaner from "../../../../Hooks/AdminPanel/Baner/useDeleteBaner";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import DetailModal from "../../../../Components/DetailModal/DetailModal";
import useEditBaner from "../../../../Hooks/AdminPanel/Baner/useEditBaner";
import { getUserToken } from "../../../../Utils/Funcs/utils";
import useAcceptOrDecline from "../../../../Hooks/AdminPanel/Baner/useAcceptOrDecline";

function CampaignBannersList() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [msg, setMsg] = useState("");
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowActiveModal, setIsShowActiveModal] = useState(false);
  const [banerId, setBanerId] = useState(null);
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");

  const { data: baners, isLoading } = useGetAllBaner();
  const { mutateAsync: deleteBaner } = useDeleteBaner();
  const { mutateAsync: editBaner, isLoading: editLoading } = useEditBaner();
  const { mutateAsync: acceptOrDecline, isLoading: stateLoading } =
    useAcceptOrDecline();

  const deleteBanerHandler = async () => {
    const result = await deleteBaner(banerId);
    if (result.status === 200) {
      setIsShowDeleteModal(false);
      setMsg("بنر با موفقیت حذف شد");
      setIsShowSuccessModal(true);
    }
  };

  const editBanerHandler = async () => {
    const info = {
      id: banerId,
      token: getUserToken(),
      title,
    };

    const result = await editBaner(info);

    if (result.status === 200) {
      setIsShowEditModal(false);
      setMsg("بنر با موفقیت ویرایش شد");
      setIsShowSuccessModal(true);
    }
  };

  const acceptOrDeclineHandler = async () => {
    const info = {
      id: banerId,
      token: getUserToken(),
      status,
    };

    const result = await acceptOrDecline(info);
    if (result.status === 200) {
      setIsShowActiveModal(false);
      setMsg(`بنر ${status === "accept" ? "فعال" : "غیر فعال"}   شد`);
      setIsShowSuccessModal(true);
    }
  };

  return (
    <>
      <div className="pb-6">
        {isLoading ? (
          <Loader />
        ) : baners?.length ? (
          <Table title={"لیست"} main={"بنر ها"}>
            <table className="user-table mt-7">
              <thead className="">
                <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                  <td>شماره</td>
                  <td>عنوان</td>
                  <td>وضعیت</td>
                  <td>سازنده</td>
                  <td>تایید</td>
                  <td>حذف</td>
                  <td>ویرایش</td>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {baners?.map((baner, index) => (
                  <tr
                    className="child:p-4 text-center font-DanaMedium"
                    key={baner._id}
                  >
                    <td
                      className={`${
                        baner.isActive ? "bg-green-600" : "bg-red-600"
                      } text-white`}
                    >
                      {index + 1}
                    </td>
                    <td>{baner.title}</td>
                    <td>{baner.isActive ? "منتشر شده" : "منتشر نشده"}</td>
                    <td>{baner.creator.name}</td>
                    <td>
                      {baner.isActive ? (
                        <button
                          className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          onClick={() => {
                            setBanerId(baner._id);
                            setIsShowActiveModal(true);
                            setStatus("decline");
                          }}
                        >
                          رد
                        </button>
                      ) : (
                        <button
                          className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          onClick={() => {
                            setBanerId(baner._id);
                            setIsShowActiveModal(true);
                            setStatus("accept");
                          }}
                        >
                          تایید
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                        onClick={() => {
                          setIsShowDeleteModal(true);
                          setBanerId(baner._id);
                        }}
                      >
                        حذف
                      </button>
                    </td>
                    <td>
                      <button
                        className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                        onClick={() => {
                          setIsShowEditModal(true);
                          setBanerId(baner._id);
                          setTitle(baner.title);
                        }}
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
          <EmptyError msg={"هیچ بنری تاکنون ساخته نشده است"} />
        )}
      </div>
      {isShowDeleteModal && (
        <DeleteModal
          onClose={setIsShowDeleteModal}
          onClick={deleteBanerHandler}
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
      {isShowEditModal && (
        <DetailModal onClose={setIsShowEditModal}>
          <div className="bg-white w-[350px] md:w-[450px] px-5 pt-4 pb-6 space-y-5 font-MorabbaBold">
            <h3 className="text-center  text-lg md:text-2xl lg:text-3xl">
              مقدار جدید بنر را بنویسید
            </h3>
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3">
              <input
                type="text"
                placeholder="عنوان بنر را وارد کنید ..."
                className="outline-none w-full bg-gray-100 font-DanaMedium"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#life-style"></use>
              </svg>
            </div>
            <button
              className="bg-blue-600 text-white flex-center w-full py-3 text-base md:text-lg lg:text-xl"
              onClick={() => editBanerHandler()}
            >
              {editLoading ? "در حال ویرایش" : "ویرایش بنر"}
            </button>
          </div>
        </DetailModal>
      )}
      {isShowActiveModal && (
        <DeleteModal
          onClose={setIsShowActiveModal}
          onClick={acceptOrDeclineHandler}
          title={
            status === "accept"
              ? "آیا از فعال کردن اطمینان دارید ؟"
              : "آیا از غیر فعال کردن اطمینان دارید ؟"
          }
        />
      )}
    </>
  );
}

export default CampaignBannersList;
