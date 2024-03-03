import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useId, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import PageTitle from "../../../../Components/AdminPanel/PageTitle/PageTitle";
import { useForm } from "react-hook-form";
import { productSchema } from "./productSchema";
import Input from "../../../../Components/AdminPanel/Input/Input";
import useCreate from "../../../../Hooks/AdminPanel/Product/useCreate";
import useGetAll from "../../../../Hooks/AdminPanel/Category/useGetAll";
import StatusModal from "../../../../Components/SuccessModal/SuccessModal";
import ErrorModal from "../../../../Components/SuccessModal/SuccessModal";
import Button from "../../../../Components/AdminPanel/Button/Button";

function AddNewProduct() {
  const [productBody, setProductBody] = useState("");
  const [productFeature, setProductFeature] = useState("");
  const [images, setImages] = useState("");
  const [isInSlider, setIsInSlider] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowErrModal, setIsShowErrModal] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(productSchema) });

  const { mutateAsync: createNewProduct, isLoading } = useCreate();
  const { data: categories } = useGetAll();
  const [allImages, setAllImages] = useState([]);

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    if (files) {
      setImages([...images, ...files]);
      files.forEach((file) => {
        setAllImages((prevImage) => [...prevImage, URL.createObjectURL(file)]);
      });
    }
  };

  const addNewProductHandler = async (data) => {
    console.log(data);
    if (
      images !== "" &&
      data.category !== "-1" &&
      productFeature !== "" &&
      productBody !== ""
    ) {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("price", +data.price);
      formData.append("count", +data.count);
      formData.append("colorCount", +data.colorCount);
      formData.append("off", +data.off);
      formData.append("link", data.link);
      formData.append("shortDesc", data.shortDesc);
      formData.append("longDesc", data.longDesc);
      formData.append("isInSlider", isInSlider);
      formData.append("moreDesc", productBody);
      formData.append("category", data.category);
      formData.append("productFeature", productFeature);
      images.forEach((image) => {
        formData.append("images", image);
      });

      const result = await createNewProduct(formData);
      if (result.status === 202) {
        setIsShowSuccessModal(true);
        clearInputs();
      }
    } else {
      setIsShowErrModal(true);
    }
  };

  const clearInputs = () => {
    setValue("category", "-1");
    setValue("colorCount", "");
    setValue("count", "");
    setValue("link", "");
    setValue("longDesc", "");
    setValue("off", "");
    setValue("price", "");
    setValue("title", "");
    setValue("shortDesc", "");
    setImages("");
    setProductBody("");
    setIsInSlider(false);
    setProductFeature("");
    setAllImages([]);
  };

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

  return (
    <>
      <PageTitle key={useId()} main={"محصول جدید"} desc={"اضافه کردن"} />
      <form
        onSubmit={handleSubmit(addNewProductHandler)}
        className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <Input
            register={register}
            errors={errors}
            icon={"square"}
            name={"title"}
            placeholder={"نام محصول را وارد کنید ..."}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            name={"price"}
            placeholder={" قیمت محصول را وارد کنید ..."}
            icon={"money"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            name={"count"}
            icon={"bag"}
            placeholder={" موجودی محصول را وارد کنید ..."}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            placeholder={" تعداد رنگ بندی را وارد کنید ..."}
            name={"colorCount"}
            icon={"square"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            name={"off"}
            placeholder={"مقدار تخفیف محصول را وارد کنید ..."}
            icon={"discount-icon"}
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
          <Input
            register={register}
            errors={errors}
            icon={"link"}
            placeholder={"آدرس لینک محصول را وارد کنید ..."}
            name={"link"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            icon={"article"}
            placeholder={"توضیحات خلاصه محصول را بنویسید"}
            name={"shortDesc"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            icon={"chat"}
            name={"longDesc"}
            placeholder={"توضیحات کامل محصول را بنویسید"}
            type={"text"}
          />
        </div>
        <div className="mt-6 space-y-4">
          <label className="font-DanaMedium text-sm md:text-base">
            توضیحات بیشتر محصول
          </label>
          <div>
            <CKEditor
              editor={ClassicEditor}
              config={uploadConfig}
              data={productBody}
              onChange={(event, editor) => {
                const data = editor.getData();
                setProductBody(data);
              }}
            />
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <label className="font-DanaMedium text-sm md:text-base">
            چکیده مشخصات محصول
          </label>
          <div>
            <CKEditor
              config={uploadConfig}
              editor={ClassicEditor}
              data={productFeature}
              onChange={(event, editor) => {
                const data = editor.getData();
                setProductFeature(data);
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-2 mt-6">
          <input
            type="checkbox"
            id="slider"
            onChange={(e) => setIsInSlider(e.target.checked)}
          />
          <label
            htmlFor="slider"
            className="font-DanaDemiBold text-sm md:text-base"
          >
            نمایش در اسلایدر
          </label>
        </div>
        <div className="mt-6">
          <label
            htmlFor="uploader-image"
            className="bg-blue-600 w-[150px] text-white flex items-center gap-x-2 p-2 rounded-md"
          >
            <svg className="w-7 md:w-8 h-7 md:h-8">
              <use href="#image"></use>
            </svg>
            <span className="font-DanaDemiBold text-sm md:text-base">
              آپلود عکس ها
            </span>
          </label>
          <input
            id="uploader-image"
            type="file"
            className="hidden w-full bg-gray-100"
            multiple
            onChange={handleChange}
          />
        </div>
        {allImages.length !== 0 && (
          <div className="grid place-items-center mt-12 gap-y-8 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allImages.map((image, index) => (
              <div className="flex items-center justify-center flex-col space-y-4">
                <img className="w-[150px] rounded-md" src={image} />
                <div
                  className="bg-red-600 text-white inline-block p-1 rounded-md mx-auto md:cursor-pointer"
                  onClick={() => deleteImage(index)}
                >
                  <svg className="h-6 md:w-7 w-6 md:h-7">
                    <use href="#trash"></use>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center justify-center md:justify-start flex-wrap gap-x-5 ">
          <Button title={'ایجاد محصول'} isLoading={isLoading} />
          <Link
            to={"advance"}
            className="bg-amber-500  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow mt-6"
          >
            ایجاد مشخصه
          </Link>
          <Link
            to={"feature"}
            className="bg-red-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow mt-6"
          >
            ایجاد ویژگی
          </Link>
          <Link
            to={"colors"}
            className="bg-gray-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow mt-6"
          >
            ایجاد رنگ
          </Link>
        </div>
      </form>

      {isShowSuccessModal && (
        <StatusModal
          onClose={setIsShowSuccessModal}
          title={"محصول با موفقیت ساخته شد"}
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
          title={"عکس یا دسته بندی خالی میباشد"}
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

export default AddNewProduct;
