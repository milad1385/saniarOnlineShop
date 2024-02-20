import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useId, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../../Components/AdminPanel/PageTitle/PageTitle";

function AddNewProduct() {
  const [productBody, setProductBody] = useState("");
  return (
    <>
      <PageTitle key={useId()} main={"محصول جدید"} desc={"اضافه کردن"} />
      <div className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="نام محصول را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#square"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="  قیمت محصول را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#money"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="  موجودی محصول را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#bag"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder=" تعداد رنگ بندی را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#envelope"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder=" مقدار تخفیف محصول را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#discount-icon"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <select className="outline-none w-full bg-gray-100">
              <option value="-1">نام دسته بندی را انتخاب کنید</option>
              <option value="5">موبایل</option>
              <option value="6">لپ تاپ</option>
            </select>
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#city"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="  آدرس لینک محصول را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#link"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input type="file" className="outline-none w-full bg-gray-100" />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#image"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="توضیحات خلاصه محصول را بنویسید"
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#article"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="توضیحات کامل محصول را بنویسید"
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#chat"></use>
            </svg>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <label className="font-DanaMedium">توضیحات بیشتر محصول</label>
          <div>
            <CKEditor
              editor={ClassicEditor}
              data={productBody}
              onChange={(event, editor) => {
                const data = editor.getData();
                setProductBody(data);
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start flex-wrap gap-x-5 ">
          <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
            ایجاد محصول
          </button>
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
      </div>
    </>
  );
}

export default AddNewProduct;
