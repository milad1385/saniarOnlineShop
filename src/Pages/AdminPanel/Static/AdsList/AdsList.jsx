import React, { useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import useGetAll from "../../../../Hooks/AdminPanel/static/ads/useGetAll";
import EmptyErr from "../../../../Components/UserPanel/EmptyError/EmptyError";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import useDelete from "../../../../Hooks/AdminPanel/static/ads/useDelete";

function AdsList() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [adsId, setAdsId] = useState(null);
  const { data: ads } = useGetAll();
  const { mutateAsync: deleteAds } = useDelete();

  const deleteAdsHandler = async () => {
    const result = await deleteAds(adsId);

    if (result.status === 200) {
      setIsShowDeleteModal(false);
      setIsShowSuccessModal(true);
    }
  };
  return (
    <>
      <div className="pb-6">
        {ads?.length ? (
          <Table title={"لیست"} main={"شعار ها"}>
            <table className="user-table mt-7">
              <thead className="">
                <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                  <td>شماره</td>
                  <td>لوگو</td>
                  <td>عنوان</td>
                  <td>توضیحات</td>
                  <td>حذف</td>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {ads?.map((advertis, index) => (
                  <tr className="child:p-4 text-center font-DanaMedium">
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`https://shoppingmilad.liara.run/uploads/covers/${advertis.logo}`}
                        alt="history"
                        class="w-[50px] mx-auto"
                      />
                    </td>
                    <td>{advertis.title}</td>
                    <td>{advertis.desc}</td>
                    <td>
                      <button
                        className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                        onClick={() => {
                          setAdsId(advertis._id);
                          setIsShowDeleteModal(true);
                        }}
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
        ) : (
          <EmptyErr msg={"هیج شعاری در سایت وجود ندارد"} />
        )}
      </div>
      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"  شعار با موفقیت حذف شد"}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setIsShowSuccessModal(false)}
        />
      )}

      {isShowDeleteModal && (
        <DeleteModal
          title={"آیا از حذف کردن اطمینان دارید ؟"}
          onClick={() => deleteAdsHandler()}
          onClose={() => setIsShowDeleteModal(false)}
        />
      )}
    </>
  );
}

export default AdsList;
