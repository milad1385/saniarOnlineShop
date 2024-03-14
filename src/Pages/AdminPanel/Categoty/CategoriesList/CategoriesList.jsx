import React, { useEffect, useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import Pagination from "../../../../Components/Pagination/Pagination";
import useGetAll from "../../../../Hooks/AdminPanel/Category/useGetAll";
import EmptyError from "../../../../Components/UserPanel/EmptyError/EmptyError";
import useDelete from "../../../../Hooks/AdminPanel/Category/useDelete";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import { getSearchParam } from "../../../../Utils/Funcs/utils";
import EditModal from "./../EditModal";
import ConfirmModal from "../../../../Components/ConfirmModal/ConfirmModal";
import Modal from "../../../../Components/Modal/Modal";
import TButton from "../../../../Components/AdminPanel/TButton/TButton";
import Loader from "../../../../Components/Loader/Loader";

function CategoriesList() {
  const [successInfo, setSuccessInfo] = useState({});
  const pageNum = getSearchParam("page");
  const [page, setPage] = useState(pageNum);

  const { data: categories , isLoading } = useGetAll(page);
  const { mutateAsync: deleteCategory, isLoading: isDeleting } =
    useDelete(setSuccessInfo);

  useEffect(() => {
    setPage(pageNum || 1);
  }, [pageNum]);

  const deleteCategoryHandler = async (id) => {
    await deleteCategory(id);
  };


  if (isLoading) return <Loader />;
  if (!categories?.categories.length)
    return <EmptyError msg={"هیج دسته بندی در سایت وجود ندارد"} />;
  return (
    <>
      <div className="pb-6">
        <Table title={"لیست"} main={"دسته بندی ها"}>
          <table className="user-table mt-7">
            <thead className="">
              <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                <td>شماره</td>
                <td>تصویر</td>
                <td>عنوان</td>
                <td>تاریخ</td>
                <td>لینک</td>
                <td>حذف</td>
                <td>ویرایش</td>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {categories?.categories.map((category, index) => (
                <tr
                  className="child:p-4 text-center font-DanaMedium"
                  key={category._id}
                >
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`http://localhost:3001/uploads/covers/${category.image}`}
                      className="w-[65px] md:w-[80px] mx-auto"
                    />
                  </td>
                  <td>{category.title}</td>
                  <td>{category.date}</td>
                  <td>{category.link}</td>
                  <td>
                    <Modal>
                      <Modal.Open name={"delete"}>
                        <TButton
                          title={"حذف"}
                          className={"bg-red-600"}
                        ></TButton>
                      </Modal.Open>
                      <Modal.Page name={"delete"}>
                        <ConfirmModal
                          title={"آیا از حذف کردن اطمینان دارید ؟"}
                          disable={isDeleting}
                          isConfirming={isDeleting}
                          onConfirm={() => deleteCategoryHandler(category._id)}
                        />
                      </Modal.Page>
                    </Modal>
                  </td>
                  <td>
                    <Modal>
                      <Modal.Open name={"edit"}>
                        <TButton
                          title={"ویرایش"}
                          className={"bg-blue-600"}
                        ></TButton>
                      </Modal.Open>
                      <Modal.Page name={"edit"}>
                        <EditModal categoryInfo={category} onInfo={setSuccessInfo} />
                      </Modal.Page>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Table>
        <Pagination
          count={categories?.paginatedNumber}
          page={page}
          setPage={setPage}
        />
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

export default CategoriesList;
