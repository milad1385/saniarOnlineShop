import React, { useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import useGetAllBaner from "../../../../Hooks/AdminPanel/Baner/useGetAllBaner";
import EmptyError from "../../../../Components/UserPanel/EmptyError/EmptyError";
import Loader from "../../../../Components/Loader/Loader";
import useDeleteBaner from "../../../../Hooks/AdminPanel/Baner/useDeleteBaner";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";

function CampaignBannersList() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [msg, setMsg] = useState("");
  const [banerId, setBanerId] = useState(null);

  const { data: baners, isLoading } = useGetAllBaner();
  const { mutateAsync: deleteBaner } = useDeleteBaner();

  const deleteBanerHandler = async () => {
    const result = await deleteBaner(banerId);
    if (result.status === 200) {
      setIsShowDeleteModal(false);
      setMsg("بنر با موفقیت حذف شد");
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
                        <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                          رد
                        </button>
                      ) : (
                        <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
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
    </>
  );
}

export default CampaignBannersList;
