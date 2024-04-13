import React, { useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import useGet from "../../../../Hooks/AdminPanel/discount/useGet";
import Loader from "../../../../Components/Loader/Loader";
import Modal from "../../../../Components/Modal/Modal";
import TButton from "../../../../Components/AdminPanel/TButton/TButton";
import ConfirmModal from "../../../../Components/ConfirmModal/ConfirmModal";
import useDelete from "../../../../Hooks/AdminPanel/discount/useDelete";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";

function DiscountcodesList() {
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const { data: discounts, isLoading } = useGet();
  const { mutateAsync: deleteDiscount, isLoading: isDeleting } = useDelete();

  const deleteDiscountHandler = async (id) => {
    const result = await deleteDiscount(id);
    if (result.status === 200) {
      setIsShowSuccessModal(true);
    }
  };

  if (isLoading) return <Loader />;
  return (
    <>
      <div className="pb-6">
        <Table title={"لیست"} main={"کد های تخفیف"}>
          <table className="user-table mt-7">
            <thead className="">
              <tr className="child:font-Lalezar text-base md:text-xl bg-blue-600  text-white child:p-3 text-center">
                <td>شماره</td>
                <td>کد تخفیف</td>
                <td>درصد کد</td>
                <td>حداکثر استفاده</td>
                <td>استفاده شده</td>
                <td>سازنده</td>
                <td>محصول</td>
                <td>تاریخ</td>
                <td>حذف</td>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {discounts?.map((discount, index) => (
                <tr
                  key={discount._id}
                  className="child:p-4 text-center font-DanaMedium"
                >
                  <td
                    className={
                      discount.maxUsage === discount.usage
                        ? "bg-red-600 text-white"
                        : "bg-green-600 text-white"
                    }
                  >
                    {index + 1}
                  </td>
                  <td>{discount.code}</td>
                  <td>{discount.percent} %</td>
                  <td>{discount.maxUsage}</td>
                  <td>{discount.usage}</td>
                  <td>{discount.creator.name}</td>
                  <td>{discount.product.title}</td>
                  <td>
                    {new Date(discount.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td>
                    <Modal>
                      <Modal.Open>
                        <TButton
                          title={"حذف"}
                          className={"bg-red-600 text-white"}
                        />
                      </Modal.Open>
                      <Modal.Page>
                        <ConfirmModal
                          disable={isDeleting}
                          isConfirming={isDeleting}
                          onConfirm={() => deleteDiscountHandler(discount._id)}
                        />
                      </Modal.Page>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Table>
      </div>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"کد تخفیف با موفقیت حذف شد"}
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

export default DiscountcodesList;
