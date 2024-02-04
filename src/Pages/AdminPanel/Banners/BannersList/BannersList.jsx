import React, { useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";

function BannersList() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  return (
    <>
      <div className="pb-6">
        <Table title={"لیست"} main={"اسلایدر ها"}>
          <table className="user-table mt-7">
            <thead className="">
              <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                <td>شماره</td>
                <td>تصویر</td>
                <td>عنوان</td>
                <td>لینک</td>
                <td>وضعیت</td>
                <td>تایید</td>
                <td>حذف</td>
                <td>ویرایش</td>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              <tr className="child:p-4 text-center font-DanaMedium">
                <td className="bg-green-600 text-white">1</td>
                <td>
                  <div className="w-[120px] md:w-[150px]">
                    <img
                      src="/images/slide2-2.jpg"
                      alt="slide2-2.jpg"
                      className="rounded-md mx-auto"
                    />
                  </div>
                </td>
                <td>جشنواره سامسونگ</td>
                <td>samsung</td>
                <td>منتشر شده</td>
                <td>
                  <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    تایید
                  </button>
                </td>
                <td>
                  <button
                    className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                    onClick={() => setIsShowDeleteModal(true)}
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
              <tr className="child:p-4 text-center font-DanaMedium">
                <td className="bg-red-600 text-white">2</td>
                <td>
                  <img
                    src="/images/slide3-1.jpg"
                    alt="slide2-2.jpg"
                    className="w-[150px] rounded-md mx-auto"
                  />
                </td>
                <td>جشنواره سامسونگ</td>
                <td>samsung</td>
                <td>منتشر شده</td>
                <td>
                  <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    تایید
                  </button>
                </td>
                <td>
                  <button
                    className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                    onClick={() => setIsShowDeleteModal(true)}
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
              <tr className="child:p-4 text-center font-DanaMedium">
                <td className="bg-green-600 text-white">2</td>
                <td>
                  <img
                    src="/images/slide4.jpg"
                    alt="slide2-2.jpg"
                    className="w-[150px] rounded-md mx-auto"
                  />
                </td>
                <td>جشنواره سامسونگ</td>
                <td>samsung</td>
                <td>منتشر شده</td>
                <td>
                  <button className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar">
                    تایید
                  </button>
                </td>
                <td>
                  <button
                    className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                    onClick={() => setIsShowDeleteModal(true)}
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
            </tbody>
          </table>
        </Table>
      </div>
      {isShowDeleteModal && <DeleteModal onClose={setIsShowDeleteModal} />}
    </>
  );
}

export default BannersList;
