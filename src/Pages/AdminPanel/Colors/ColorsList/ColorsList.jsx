import React, { useEffect, useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import useGetAll from "../../../../Hooks/AdminPanel/color/useGetAll";
import Pagination from "../../../../Components/Pagination/Pagination";
import EmptyError from "../../../../Components/UserPanel/EmptyError/EmptyError";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import useDelete from "../../../../Hooks/AdminPanel/color/useDelete";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";

function ColorsList() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [colorId, setColorId] = useState(null);
  const pageNum = new URLSearchParams(window.location.search).get("page");
  const [page, setPage] = useState(pageNum);

  const { data: colors } = useGetAll(page);
  const { mutateAsync: deleteColor, isLoading } = useDelete();

  useEffect(() => {
    setPage(pageNum || 1);
  }, [pageNum]);

  const deleteColorHandler = async () => {
    const result = await deleteColor(colorId);
    if (result.status === 200) {
      setIsShowDeleteModal(false);
      setIsShowSuccessModal(true);
    }
  };
  return (
    <>
      <div className="pb-6">
        <Table title={"لیست"} main={"رنگ ها"}>
          <table className="user-table mt-7">
            <thead className="">
              <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                <td>شماره</td>
                <td>نام رنگ</td>
                <td>کد رنگ</td>
                <td>تاریخ ساخت</td>
                <td>سازنده</td>
                <td>محصول</td>
                <td>حذف</td>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {colors?.colors.length ? (
                colors?.colors.map((color, index) => (
                  <tr className="child:p-4 text-center font-DanaMedium">
                    <td>{index + 1}</td>
                    <td>{color.colorName}</td>
                    <td
                      style={{
                        backgroundColor: `${color.colorCode}`,
                        color: "white",
                        direction: "ltr",
                      }}
                    >
                      {color.colorCode}
                    </td>
                    <td>{color.date}</td>
                    <td>{color.creator.name}</td>
                    <td>{color.product.title}</td>
                    <td>
                      <button
                        className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                        onClick={() => {
                          setColorId(color._id);
                          setIsShowDeleteModal(true);
                        }}
                      >
                        حذف
                      </button>
                    </td>
                    
                  </tr>
                ))
              ) : (
                <div className="mt-9">
                  <EmptyError msg={"هیچ رنگی در سایت وجود ندارد"} />
                </div>
              )}
            </tbody>
          </table>
        </Table>
        <Pagination
          count={colors?.paginatedNumber}
          page={page}
          setPage={setPage}
        />
      </div>

      {isShowDeleteModal && (
        <DeleteModal
          onClose={setIsShowDeleteModal}
          onClick={deleteColorHandler}
          isLoading={isLoading}
        />
      )}

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"رنگ با موفقیت حذف شد"}
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

export default ColorsList;
