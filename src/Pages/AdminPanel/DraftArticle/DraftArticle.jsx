import React, { useContext, useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AppContext } from "../../../App";

function DraftArticle() {
  const {setIsShowAdminMenu } = useContext(AppContext);
  useEffect(() => {
    setIsShowAdminMenu(false);
  }, []);
    const [articleBody, setArticleBody] = useState("");
  return (
    <div className="container pb-10">
      <h3 className="font-Lalezar text-xl md:text-3xl mt-10 mb-6">
         ادامه نوشتن <span className="text-blue-600">مقاله</span>
      </h3>
      <div className="bg-white py-6 px-6 rounded-md shadow font-Dana text-zinc-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-6 text-sm md:text-base">
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="عنوان مقاله را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#square"></use>
            </svg>
          </div>
          <div className="flex  items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder="لینک مقاله را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#link"></use>
            </svg>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <select className="outline-none w-full bg-gray-100">
              <option value="-1"> دسته بندی مقاله را انتخاب کنید</option>
              <option value="5">موبایل</option>
              <option value="6">لپ تاپ</option>
            </select>
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#article"></use>
            </svg>
          </div>
          <div className="flex  items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="text"
              placeholder=" مدت زمان خواندن را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#eye"></use>
            </svg>
          </div>
          <div className="bg-gray-100 py-3 px-3 rounded-lg md:col-span-2 relative">
            <textarea
              type="text"
              placeholder="چکیده مقاله را بنویسید ..."
              className="outline-none w-full bg-gray-100 h-28"
            ></textarea>
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600 absolute top-3 left-3">
              <use href="#chat"></use>
            </svg>
          </div>
          <div className="md:col-span-2">
            <label className="font-DanaMedium">متن مقاله را بنویسید</label>
            <div className="mt-4">
              <CKEditor
                editor={ClassicEditor}
                data={articleBody}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setArticleBody(data);
                }}
              />
            </div>
          </div>
          <div className="flex  items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
            <input
              type="file"
              placeholder=" مدت زمان خواندن را وارد کنید ..."
              className="outline-none w-full bg-gray-100"
            />
            <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
              <use href="#image"></use>
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
            ایجاد مقاله
          </button>
          <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
            پیش نویس
          </button>
        </div>
      </div>
    </div>
  );
}

export default DraftArticle;
