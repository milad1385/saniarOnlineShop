import React, { useEffect, useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import Modal from "../../../../Components/Modal/Modal";
import TButton from "../../../../Components/AdminPanel/TButton/TButton";
import Pagination from "../../../../Components/Pagination/Pagination";
import useGetAll from "../../../../Hooks/AdminPanel/Product/useGetAll";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import useDelete from "../../../../Hooks/AdminPanel/Product/useDelete";
import Loader from "../../../../Components/Loader/Loader";
import { getSearchParam } from "../../../../Utils/Funcs/utils";

import { Link } from "react-router-dom";
import ConfirmModal from "../../../../Components/ConfirmModal/ConfirmModal";
function ProductList() {
  const [successInfo, setSuccessInfo] = useState({});
  const pageNum = getSearchParam("page");
  const [page, setPage] = useState(pageNum);
  useEffect(() => {
    setPage(pageNum || 1);
  }, []);

  const { data: products, isLoading } = useGetAll(page);
  const { mutateAsync: deleteProduct, isLoading: isDeleting } =
    useDelete(setSuccessInfo);

  const deleteProductHandler = async (id) => {
    await deleteProduct(id);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="pb-6">
          <Table title={"لیست"} main={"محصولات"}>
            <table className="user-table mt-7">
              <thead className="">
                <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                  <td>شماره</td>
                  <td>عکس اصلی</td>
                  <td>نام</td>
                  <td>قیمت</td>
                  <td>موجودی</td>
                  <td>تخفیف</td>
                  <td>لینک</td>
                  <td>دسته بندی</td>
                  <td>حذف</td>
                  <td>جزییات</td>
                  <td>ویرایش</td>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {products?.products.map((product, index) => (
                  <tr className="child:p-3 text-center font-DanaMedium">
                    <td>{index + 1}</td>
                    <td>
                      <div className="w-[70px] md:w-[85px]">
                        <img
                          src={`http://localhost:3001/uploads/covers/${product.images[0]}`}
                          className=""
                        />
                      </div>
                    </td>
                    <td>{product.title}</td>
                    <td>{product.price.toLocaleString("fa")}</td>
                    <td>{product.count}</td>
                    <td>{product.off ? product.off + `%` : "تخفیف ندارد"}</td>
                    <td>{product.link}</td>
                    <td>{product.category.title}</td>
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
                            onConfirm={() => deleteProductHandler(product._id)}
                          />
                        </Modal.Page>
                      </Modal>
                    </td>

                    <td>
                      <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                        جزییات
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`edit/${product.link}`}
                        className="bg-blue-600 block  text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                      >
                        ویرایش
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
          <Pagination
            count={products?.paginatedNumber}
            page={page}
            setPage={setPage}
          />
        </div>
      )}

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

export default ProductList;
