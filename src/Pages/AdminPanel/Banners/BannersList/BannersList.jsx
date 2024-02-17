import React, { useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import useGetAllSliders from "../../../../Hooks/AdminPanel/sliders/useGetAllSliders";
import EmptyError from "../../../../Components/UserPanel/EmptyError/EmptyError";
import useDeleteSlider from "../../../../Hooks/AdminPanel/sliders/useDeleteSlider";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import useAcceptOrDecline from "../../../../Hooks/AdminPanel/sliders/useAcceptOrDecline";

function BannersList() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowAcceptOrDeclineModal, setIsShowAcceptOrDeclineModal] =
    useState(false);
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  const [banerId, setBanerId] = useState(null);

  const { data: slider, lodaing } = useGetAllSliders();
  const { mutateAsync: deleteSlider } = useDeleteSlider();
  const { mutateAsync: acceptOrDecline } = useAcceptOrDecline();

  const deleteSliderHandler = async () => {
    const result = await deleteSlider(banerId);
    console.log(result);
    if (result.status === 200) {
      setMsg("اسلایدر با موفقیت حذف شد");
      setIsShowDeleteModal(false);
      setIsShowSuccessModal(true);
    }
  };

  const acceptOrDeclineHandler = async () => {
    const info = {
      id: banerId,
      status,
    };

    const result = await acceptOrDecline(info);
    if (result.status === 200) {
      setMsg(`اسلایدر با موفقیت ${status === "accept" ? "تایید" : "رد"} شد`);
      setIsShowAcceptOrDeclineModal(false);
      setIsShowSuccessModal(true);
    }
  };
  return (
    <>
      <div className="pb-6">
        {slider?.length ? (
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
                {slider?.map((slide, index) => (
                  <tr
                    className="child:p-4 text-center font-DanaMedium"
                    key={slide._id}
                  >
                    <td
                      className={`${
                        slide.isActive ? "bg-green-600" : "bg-red-600"
                      } text-white`}
                    >
                      {index + 1}
                    </td>
                    <td>
                      <div className="w-[120px] md:w-[150px]">
                        <img
                          src={`http://localhost:3001/uploads/covers/${slide.image}`}
                          alt={slide.title}
                          className="rounded-md mx-auto"
                        />
                      </div>
                    </td>
                    <td>{slide.title}</td>
                    <td>{slide.link}</td>
                    <td>{slide.isActive ? "منتشر شده" : "منتشر نشده"}</td>
                    <td>
                      {slide.isActive ? (
                        <button
                          className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          onClick={() => {
                            setIsShowAcceptOrDeclineModal(true);
                            setBanerId(slide._id);
                            setStatus("decline");
                          }}
                        >
                          رد
                        </button>
                      ) : (
                        <button
                          className="bg-amber-500 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          onClick={() => {
                            setIsShowAcceptOrDeclineModal(true);
                            setBanerId(slide._id);
                            setStatus("accept");
                          }}
                        >
                          تایید
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                        onClick={() => {
                          setBanerId(slide._id);
                          setIsShowDeleteModal(true);
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
        ) : (
          <div className="mt-9">
            <EmptyError msg={"هیچ اسلایدری در سایت وجود ندارد"} />
          </div>
        )}
      </div>
      {isShowDeleteModal && (
        <DeleteModal
          onClose={setIsShowDeleteModal}
          onClick={deleteSliderHandler}
        />
      )}
      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={msg}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setIsShowSuccessModal(false)}
        />
      )}
      {isShowAcceptOrDeclineModal && (
        <DeleteModal
          onClose={setIsShowAcceptOrDeclineModal}
          onClick={acceptOrDeclineHandler}
          title={`آیا از ${
            status === "accept" ? "تایید کردن" : "رد کردن"
          } اسلایدر اطمینان دارید`}
        />
      )}
    </>
  );
}

export default BannersList;
