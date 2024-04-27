import React, { useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import useGetAllSliders from "../../../../Hooks/AdminPanel/sliders/useGetAllSliders";
import EmptyError from "../../../../Components/UserPanel/EmptyError/EmptyError";
import useDeleteSlider from "../../../../Hooks/AdminPanel/sliders/useDeleteSlider";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import useAcceptOrDecline from "../../../../Hooks/AdminPanel/sliders/useAcceptOrDecline";
import DetailModal from "../../../../Components/DetailModal/DetailModal";
import useEditSlider from "../../../../Hooks/AdminPanel/sliders/useEditSlider";
import { useForm } from "react-hook-form";
import { sliderSchema } from "./../AddNewBanner/sliderSchema";
import { yupResolver } from "@hookform/resolvers/yup";

function BannersList() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [image, setImage] = useState({});
  const [lastImage, setLastImage] = useState("");
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowAcceptOrDeclineModal, setIsShowAcceptOrDeclineModal] =
    useState(false);
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  const [banerId, setBanerId] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(sliderSchema) });

  const { data: slider, lodaing } = useGetAllSliders();
  const { mutateAsync: deleteSlider } = useDeleteSlider();
  const { mutateAsync: acceptOrDecline } = useAcceptOrDecline();
  const { mutateAsync: editSlider, isLoading: editLoading } = useEditSlider();

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

  const showEditModal = (slider) => {
    setBanerId(slider._id);
    setIsShowEditModal(true);
    setValue("title", slider.title);
    setValue("link", slider.link);
    setLastImage(slider.image);
  };

  const editHandler = async (data) => {
    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("link", data?.link);
    formData.append("image", image);
    formData.append("lastImage", lastImage);

    const info = {
      id: banerId,
      data: formData,
    };

    const result = await editSlider(info);
    if (result.status === 200) {
      setMsg("اسلایدر با موفقیت ویرایش شد");
      setIsShowEditModal(false);
      setIsShowSuccessModal(true);
      setImage("");
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
                      <button
                        className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                        onClick={() => showEditModal(slide)}
                      >
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
      {isShowEditModal && (
        <DetailModal onClose={setIsShowEditModal}>
          <form
            onSubmit={handleSubmit(editHandler)}
            className="bg-white w-[350px] md:w-[450px] px-5 pt-4 pb-6 space-y-5 font-MorabbaBold"
          >
            <h3 className="text-center  text-lg md:text-2xl lg:text-3xl">
              مقدار جدید اسلایدر را بنویسید
            </h3>
            <div className="relative">
              <div className="flex items-center text-sm md:text-base justify-between bg-gray-100 py-2 px-3">
                <input
                  type="text"
                  {...register("title")}
                  placeholder="عنوان اسلایدر را وارد کنید ..."
                  className="outline-none w-full bg-gray-100 font-DanaMedium"
                />
                <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                  <use href="#life-style"></use>
                </svg>
              </div>
              {errors.title && (
                <span className="absolute text-xs md:text-sm text-red-600 top-[42px] md:top-[54px] font-DanaDemiBold ">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div className="relative">
              <div className="flex items-center justify-between bg-gray-100 py-2 px-3">
                <input
                  type="text"
                  {...register("link")}
                  placeholder="لینک اسلایدر را وارد کنید ..."
                  className="outline-none w-full bg-gray-100 font-DanaMedium"
                />
                <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                  <use href="#link"></use>
                </svg>
              </div>
              {errors.link && (
                <span className="absolute text-xs md:text-sm text-red-600 top-[42px] md:top-[54px] font-DanaDemiBold ">
                  {errors.link.message}
                </span>
              )}
            </div>
            <div className="relative">
              <div className="flex items-center justify-between bg-gray-100 py-2 px-3">
                <input
                  type="file"
                  className="outline-none w-full bg-gray-100 font-DanaMedium text-sm md:text-base"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                  <use href="#image"></use>
                </svg>
              </div>
            </div>
            <button
              className="bg-blue-600 text-white flex-center w-full py-3 text-base md:text-lg lg:text-xl"
              onClick={() => editHandler()}
            >
              {editLoading ? "در حال ویرایش" : "ویرایش بنر"}
            </button>
          </form>
        </DetailModal>
      )}
    </>
  );
}

export default BannersList;
