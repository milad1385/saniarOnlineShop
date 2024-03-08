import React, { useId, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PageTitle from "../../../../Components/AdminPanel/PageTitle/PageTitle";
import { articleSchema } from "./articleSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../../../../Components/AdminPanel/Input/Input";
import useGetAll from "../../../../Hooks/AdminPanel/Category/useGetAll";
import useCreate from "../../../../Hooks/AdminPanel/article/useCreate";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import Button from "../../../../Components/AdminPanel/Button/Button";

function AddNewArticle() {
  const [image, setImage] = useState([]);
  const [isShowErrModal, setIsShowErrModal] = useState(false);
  const [curImage, setCurImage] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const { data: categories } = useGetAll();
  const { mutateAsync: createNewArticle, isLoading } = useCreate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(articleSchema) });

  const uploadConfig = {
    ckfinder: {
      uploadUrl: "http://localhost:3001/upload",
      withCredentials: true,
      headers: {
        "X-CSRF-TOKEN": "CSFR-TOKEN",
        Authorization: `Bearer <JSON Web Token>`,
      },
    },
    language: "fa",
    direction: "rtl",
  };

  const addNewArticleHandler = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("link", data.link);
    formData.append("desc", articleBody);
    formData.append("image", image);
    formData.append("readingTime", data.readingTime);
    formData.append("category", data.category);

    const result = await createNewArticle(formData);
    if (result.status === 202) {
      setIsShowSuccessModal(true);
      clearInput();
    }
  };

  const clearInput = () => {
    setValue("category", "");
    setValue("desc", "");
    setValue("link", "");
    setValue("readingTime", "");
    setValue("shortDesc", "");
    setValue("title", "");
    setArticleBody("");
  };
  return (
    <>
      <PageTitle key={useId()} main={"مقاله"} desc={"اضافه کردن"} />

      <form
        onSubmit={handleSubmit(addNewArticleHandler)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <Input
            register={register}
            errors={errors}
            icon={"square"}
            name={"title"}
            placeholder={"عنوان مقاله را وارد کنید ..."}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            name={"link"}
            placeholder={" لینک مقاله را وارد کنید ..."}
            icon={"link"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            name={"readingTime"}
            placeholder={"مدت زمان خواندن مقاله را وارد کنید ..."}
            icon={"clock"}
            type={"text"}
          />
          <div className="relative">
            <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
              <select
                className="outline-none w-full bg-gray-100"
                {...register("category")}
              >
                <option value="">نام دسته بندی را انتخاب کنید</option>
                {categories?.categories.map((category) => (
                  <option value={`${category._id}`}>{category.title}</option>
                ))}
              </select>
              <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
                <use href="#city"></use>
              </svg>
            </div>
            {errors.category && (
              <span className="absolute text-xs md:text-sm text-red-600  font-DanaDemiBold ">
                {errors.category.message}
              </span>
            )}
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <label className="font-DanaMedium text-sm md:text-base">
            متن مقاله را وارد کنید
          </label>
          <div>
            <CKEditor
              editor={ClassicEditor}
              config={uploadConfig}
              data={articleBody}
              onChange={(event, editor) => {
                const data = editor.getData();
                setArticleBody(data);
              }}
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="uploader-image"
            className="bg-blue-600 w-[135px] text-white flex items-center gap-x-2 p-2 rounded-md"
          >
            <svg className="w-7 md:w-8 h-7 md:h-8">
              <use href="#image"></use>
            </svg>
            <span className="font-DanaDemiBold text-sm md:text-base">
              آپلود عکس 
            </span>
          </label>
          <input
            id="uploader-image"
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setCurImage(URL.createObjectURL(e.target.files[0]));
            }}
            className="hidden w-full bg-gray-100"
          />
        </div>

        {curImage.length > 0 && (
          <div className="flex-center my-6 md:my-12">
            <img className="w-[600px] rounded-md" src={curImage} />
          </div>
        )}

        <div className="flex  md:justify-start flex-wrap gap-x-5 ">
          <Button title={"ایجاد مقاله"} isLoading={isLoading} />
        </div>
      </form>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"مقاله با موفقیت ساخته شد"}
          text={"خیلی هم عالی"}
          icon={"face-smile"}
          color="text-blue-600"
          bg="bg-blue-600"
          onClick={() => setIsShowSuccessModal(false)}
        />
      )}

      {isShowErrModal && (
        <StatusModal
          onClose={setIsShowErrModal}
          title={"عکس مقاله را آپلود کنید"}
          text={"تلاش مجدد"}
          icon={"face-frown"}
          color="text-red-600"
          bg="bg-red-600"
          onClick={() => setIsShowErrModal(false)}
        />
      )}
    </>
  );
}

export default AddNewArticle;
