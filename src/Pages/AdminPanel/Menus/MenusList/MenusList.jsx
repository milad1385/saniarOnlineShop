import React, { useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import useGet from "../../../../Hooks/AdminPanel/menu/useGet";
import Loader from "../../../../Components/Loader/Loader";

function MenusList() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const { data: menus, isLoading } = useGet();
  console.log(menus);
  if (isLoading) return <Loader />;
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
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {menus?.menus.map((menu, index) => (
                <tr
                  key={menu._id}
                  className="child:p-4 text-center font-DanaMedium"
                >
                  <td>{index + 1}</td>
                  <td>{menu.name}</td>
                  <td>{menu.link}</td>
                  <td>{menu.parent ? menu.parent.name : "-----"}</td>
                  <td>
                    <button
                      className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                      onClick={() => setIsShowDeleteModal(true)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Table>
      </div>
      {isShowDeleteModal && <DeleteModal onClose={setIsShowDeleteModal} />}
    </>
  );
}

export default MenusList;
