import React, { useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";

function CampaignBannersList() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  return (
    <>
      <div className="pb-6">
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
              <tr className="child:p-4 text-center font-DanaMedium">
                <td className="bg-green-600 text-white">1</td>
                <td>جشنواره سامسونگ</td>
                <td>منتشر شده</td>
                <td>
                    میلاد سلامیان
                </td>
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
                <td>جشنواره سامسونگ</td>
                <td>منتشر نشده</td>
                <td>
                    میلاد سلامیان
                </td>
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

export default CampaignBannersList;
