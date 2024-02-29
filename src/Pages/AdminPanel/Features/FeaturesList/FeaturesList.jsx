import React, { useEffect, useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import useGetAll from "../../../../Hooks/AdminPanel/feature/useGetAll";
import EmptyErr from "../../../../Components/UserPanel/EmptyError/EmptyError";
import Pagination from "../../../../Components/Pagination/Pagination";
import Loader from "../../../../Components/Loader/Loader";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import useDelete from "../../../../Hooks/AdminPanel/feature/useDelete";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";

function FeaturesList() {
  const pageNum = new URLSearchParams(window.location.search).get("page");
  const [page, setPage] = useState(pageNum);
  const [featureId, setFeatureId] = useState(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);

  useEffect(() => {
    setPage(pageNum || 1);
  }, [pageNum]);

  const { data: features, isLoading } = useGetAll(page);
  const { mutateAsync: deleteFeature } = useDelete();

  const deleteFeatureHandler = async () => {
    const result = await deleteFeature(featureId);
    if (result.status === 200) {
      setIsShowDeleteModal(false);
      setIsShowSuccessModal(true);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="pb-6">
          {features?.features.length ? (
            <>
              <Table title={"لیست"} main={"ویژگی ها"}>
                <table className="user-table mt-7">
                  <thead className="">
                    <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                      <td>شماره</td>
                      <td>نام ویژگی</td>
                      <td>مقدار ویژگی</td>
                      <td>محصول</td>
                      <td>تاریخ</td>
                      <td>حذف</td>
                      <td>ویرایش</td>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base">
                    {features?.features.map((feature, index) => (
                      <tr className="child:p-4 text-center font-DanaMedium">
                        <td>{index + 1}</td>
                        <td>{feature.featureName}</td>
                        <td>{feature.featureValue}</td>
                        <td>{feature.product.title}</td>
                        <td>{feature.date}</td>
                        <td>
                          <button
                            className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                            onClick={() => {
                              setIsShowDeleteModal(true);
                              setFeatureId(feature._id);
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
              <Pagination
                count={features?.paginatedNumber}
                page={page}
                setPage={setPage}
              />
            </>
          ) : (
            <div className="mt-9">
              <EmptyErr msg={"هیچ ویژگی برای محصول ها تعریف نشده است"} />
            </div>
          )}
        </div>
      )}

      {isShowDeleteModal && (
        <DeleteModal
          onClose={setIsShowDeleteModal}
          onClick={deleteFeatureHandler}
          isLoading={isLoading}
        />
      )}

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"ویژگی با موفقیت حذف شد"}
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

export default FeaturesList;
