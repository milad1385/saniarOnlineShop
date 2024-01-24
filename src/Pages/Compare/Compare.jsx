import React, { useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import FooterMenu from "../../Components/FooterMenu/FooterMenu";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import TitleCat from "../../Components/TitleCat/TitleCat";
import CompareBox from "../../Components/CompareBox/CompareBox";
import DetailModal from "../../Components/DetailModal/DetailModal";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import Pagination from "../../Components/Pagination/Pagination";
import EmptyError from "../../Components/UserPanel/EmptyError/EmptyError";
import { Link } from "react-router-dom";

function Compare() {
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <BreadCrumb
          links={[
            { id: 1, name: "خانه", to: "/" },
            { id: 2, name: "فروشگاه", to: "/" },
            { id: 3, name: "مقایسه محصولات", to: "/" },
          ]}
        />
        <TitleCat main={"مقایسه"} desc={"محصولات"} isMain={true} />
        <div className="bg-slate-50 shadow rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 py-4 px-3 mt-5">
          <CompareBox
            onShowDetail={setIsShowDetailModal}
            onShowDelete={setIsShowDeleteModal}
          />
          <CompareBox
            onShowDetail={setIsShowDetailModal}
            onShowDelete={setIsShowDeleteModal}
          />
          <CompareBox
            onShowDetail={setIsShowDetailModal}
            onShowDelete={setIsShowDeleteModal}
          />
          <CompareBox
            onShowDetail={setIsShowDetailModal}
            onShowDelete={setIsShowDeleteModal}
          />
        </div>
        <div className="mt-10">
          <EmptyError msg={"هیچ محصولی برای مقایسه وجود ندارد"} />
          <div className="flex items-center justify-center">
            <Link to={'/'} className="bg-blue-600 text-white font-DanaDemiBold p-2 text-base md:text-lg rounded-md shadow-blue mt-10">
              بازگشت به فروشگاه
            </Link>
          </div>
        </div>
      </div>
      <Pagination />
      {isShowDetailModal && (
        <DetailModal onClose={setIsShowDetailModal}>
          <table>
            <thead>
              <tr className="child:text-center child:font-MorabbaBold text-base md:text-xl bg-blue-600 text-white child:p-4">
                <th>نام</th>
                <th>قیمت</th>
                <th>رنگ ها</th>
                <th>ابعاد</th>
                <th>تخفیف</th>
                <th>امتیاز</th>
              </tr>
            </thead>
            <tbody>
              <tr className="child:text-center child:font-DanaDemiBold child:p-4">
                <td>لپ تاپ تاف</td>
                <td>25,000,000 تومان</td>
                <td>3</td>
                <td>12 * 18</td>
                <td>25 %</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </DetailModal>
      )}
      {isShowDeleteModal && <DeleteModal onClose={setIsShowDeleteModal} />}
      <Footer />
      <FooterMenu />
    </>
  );
}

export default Compare;
