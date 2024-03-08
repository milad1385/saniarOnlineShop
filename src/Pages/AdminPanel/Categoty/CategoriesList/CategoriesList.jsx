import React, { useEffect, useState } from "react";
import Table from "../../../../Components/AdminPanel/Table/Table";
import Pagination from "../../../../Components/Pagination/Pagination";
import useGetAll from "../../../../Hooks/AdminPanel/Category/useGetAll";
import EmptyError from "../../../../Components/UserPanel/EmptyError/EmptyError";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import useDelete from "../../../../Hooks/AdminPanel/Category/useDelete";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import { getUserToken } from "../../../../Utils/Funcs/utils";
import EditModal from "../../../../Components/EditModal/EditModal";
import Input from "../../../../Components/AdminPanel/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "../AddNewCategory/categorySchema";
import { useForm } from "react-hook-form";
import useEdit from "../../../../Hooks/AdminPanel/Category/useEdit";
import Sppiner from "../../../../Components/Sppiner/Spinner";

function CategoriesList() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [catId, setCatId] = useState(null);
  const [image, setImage] = useState({});
  const [lastImage, setLastImage] = useState(null);
  const pageNum = new URLSearchParams(window.location.search).get("page");
  const [page, setPage] = useState(pageNum);
  const [msg, setMsg] = useState(null);

  const { data: categories } = useGetAll(page);
  const { mutateAsync: deleteCategory } = useDelete();
  const { mutateAsync: editCategory, isLoading } = useEdit();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(categorySchema) });

  useEffect(() => {
    setPage(pageNum || 1);
  }, [pageNum]);

  const deleteCategoryHandler = async () => {
    const info = {
      id: catId,
      token: getUserToken(),
    };

    const result = await deleteCategory(info);
    if (result.status === 200) {
      setIsShowDeleteModal(false);
      setMsg("دسته بندی با موفقیت حذف شد");
      setIsShowSuccessModal(true);
    }
  };

  const showEditModalHandler = (category) => {
    setCatId(category._id);
    setIsShowEditModal(true);
    setValue("title", category.title);
    setValue("link", category.link);
    setLastImage(category.image);
  };

  const updateCategory = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("link", data.link);
    formData.append("image", image);
    formData.append("lastImage", lastImage);

    const info = {
      id: catId,
      token: getUserToken(),
      data: formData,
    };

    const result = await editCategory(info);

    if (result.status === 200) {
      setIsShowEditModal(false);
      setMsg("دسته بندی با موفقیت ویرایش شد");
      setIsShowSuccessModal(true);
    }
  };
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
              {categories?.categories.length
                ? categories?.categories.map((category, index) => (
                    <tr className="child:p-4 text-center font-DanaMedium">
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
                        <button
                          className="bg-red-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          onClick={() => {
                            setIsShowDeleteModal(true);
                            setCatId(category._id);
                          }}
                        >
                          حذف
                        </button>
                      </td>
                      <td>
                        <button
                          className="bg-blue-600 text-white w-16 py-1 text-base md:text-lg rounded-md font-Lalezar"
                          onClick={() => showEditModalHandler(category)}
                        >
                          ویرایش
                        </button>
                      </td>
                    </tr>
                  ))
                : isLoading === false && (
                    <div className="mt-8">
                      <EmptyError msg={"هیج دسته بندی در سایت وجود ندارد"} />
                    </div>
                  )}
            </tbody>
          </table>
        </Table>
        <Pagination
          count={categories?.paginatedNumber}
          page={page}
          setPage={setPage}
        />
      </div>

      {isShowDeleteModal && (
        <DeleteModal
          title={"آیا از حذف کردن اطمینان دارید ؟"}
          onClick={() => deleteCategoryHandler()}
          onClose={() => setIsShowDeleteModal(false)}
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

      {isShowEditModal && (
        <EditModal onClose={setIsShowEditModal}>
          <form
            onSubmit={handleSubmit(updateCategory)}
            className="bg-white rounded-md  font-Dana text-zinc-700 mt-5"
          >
            <div className="grid grid-cols-1 gap-y-6 text-sm md:text-base">
              <Input
                register={register}
                placeholder={"نام دسته بندی را وارد کنید ..."}
                errors={errors}
                name={"title"}
                icon={"square"}
                type={"text"}
              />
              <Input
                register={register}
                placeholder={"نام لینک را وارد کنید ..."}
                errors={errors}
                name={"link"}
                icon={"link"}
                type={"text"}
              />
              <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
                <input
                  type="file"
                  className="outline-none w-full bg-gray-100"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                  <use href="#image"></use>
                </svg>
              </div>
            </div>
            <button className="bg-blue-600 w-full  font-MorabbaBold px-2 py-3 text-white text-sm md:text-xl shadow-blue mt-6">
              {isLoading ? (
                <div className="ml-9">
                  <Sppiner />
                </div>
              ) : (
                "ویرایش دسته بندی"
              )}
            </button>
          </form>
        </EditModal>
      )}
    </>
  );
}

export default CategoriesList;
