import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useEffect, useId, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import PageTitle from "../../../Components/AdminPanel/PageTitle/PageTitle";
import { useForm } from "react-hook-form";
import { productSchema } from "./../Products/AddNewProduct/productSchema";
import Input from "../../../Components/AdminPanel/Input/Input";
import useGetAll from "../../../Hooks/AdminPanel/Category/useGetAll";
import StatusModal from "../../../Components/SuccessModal/SuccessModal";
import Button from "../../../Components/AdminPanel/Button/Button";
import { useParams } from "react-router-dom";
import useGetOne from "../../../Hooks/AdminPanel/Product/useGetOne";
import useEdit from "../../../Hooks/AdminPanel/Product/useEdit";

function EditProduct() {
  const { productName } = useParams();
  const [productBody, setProductBody] = useState("");
  const [productFeature, setProductFeature] = useState("");
  const [images, setImages] = useState("");
  const [lastImages, setLastImages] = useState([]);
  const [isInSlider, setIsInSlider] = useState(false);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const [isShowErrModal, setIsShowErrModal] = useState(false);
  const { data: productInfo } = useGetOne(productName);

  useEffect(() => {
    setProductInfo();
    window.scroll(0, 0);
  }, [productInfo]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(productSchema) });

  const { mutateAsync: updateProduct, isLoading } = useEdit();
  const { data: categories } = useGetAll();
  const [allImages, setAllImages] = useState([]);

  const setProductInfo = () => {
    setValue("title", productInfo?.productInfo.title);
    setValue("price", productInfo?.productInfo.price);
    setValue("link", productInfo?.productInfo.link);
    setValue("off", productInfo?.productInfo.off);
    setValue("count", productInfo?.productInfo.count);
    setValue("colorCount", productInfo?.productInfo.colorCount);
    setValue("category", productInfo?.productInfo.category._id);
    setValue("shortDesc", productInfo?.productInfo.shortDesc);
    setValue("longDesc", productInfo?.productInfo.longDesc);
    setProductBody(productInfo?.productInfo.moreDesc ?? "");
    setProductFeature(productInfo?.productInfo.productFeature ?? "");
    setIsInSlider(productInfo?.productInfo.isInSlider);
    productInfo?.productInfo.images.map((image) =>
      setAllImages((prev) => [
        ...prev,
        `https://shoppingmilad.liara.run/uploads/covers/${image}`,
      ])
    );
    setLastImages(productInfo?.productInfo.images);
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    setAllImages([]);
    if (files) {
      setImages([...images, ...files]);
      files.forEach((file) => {
        setAllImages((prevImage) => [...prevImage, URL.createObjectURL(file)]);
      });
    }
  };

  const updateProductHandler = async (data) => {
    console.log(lastImages);
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
    formData.append("lastImage", lastImages);
    images.length
      ? images.forEach((image) => {
          formData.append("images", image);
        })
      : formData.append("images", images);

    const info = {
      data: formData,
      id: productInfo?.productInfo._id,
    };

    const result = await updateProduct(info);
    if (result.status === 202) {
      setIsShowSuccessModal(true);
    }
  };


  const uploadConfig = {
    ckfinder: {
      uploadUrl: "https://shoppingmilad.liara.run/upload",
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
      <div className="container">
        <PageTitle key={useId()} main={"محصول"} desc={"ویرایش کردن"} />
        <form
          onSubmit={handleSubmit(updateProductHandler)}
          className="bg-white py-6 px-6  rounded-md shadow font-Dana text-zinc-700 mb-10"
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
              checked={isInSlider}
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
          {allImages?.length !== 0 && (
            <div className="grid place-items-center mt-12 gap-y-8 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {allImages.map((image, index) => (
                <div className="flex items-center justify-center flex-col space-y-4">
                  <img className="w-[150px] rounded-md" src={image} />
                </div>
              ))}
            </div>
          )}
          <div className="mt-2">
            <Button title={"ویرایش محصول"} isLoading={isLoading} />
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
      </div>
    </>
  );
}

export default EditProduct;
