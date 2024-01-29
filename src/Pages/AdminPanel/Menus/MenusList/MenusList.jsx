import React, { useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";

function MenusList() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  return (
    <>
      <div className="pb-6">
        <Table title={"لیست"} main={"منو ها"}>
          <table className="user-table mt-7">
            <thead className="">
              <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                <td>شماره</td>
                <td>عنوان منو</td>
                <td>لینک منو</td>
                <td>پرنت منو</td>
                <td>حذف</td>
                <td>ویرایش</td>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              <tr className="child:p-4 text-center font-DanaMedium">
                <td>1</td>
                <td>لپ تاپ</td>
                <td>laptop-rog</td>
                <td>لوازم الکترونیکی</td>
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
                <td>2</td>
                <td>لپ تاپ</td>
                <td>laptop-rog</td>
                <td>لوازم الکترونیکی</td>
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
                <td>3</td>
                <td>لپ تاپ</td>
                <td>laptop-rog</td>
                <td>لوازم الکترونیکی</td>
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
                <td>4</td>
                <td>لپ تاپ</td>
                <td>laptop-rog</td>
                <td>لوازم الکترونیکی</td>
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

export default MenusList;
