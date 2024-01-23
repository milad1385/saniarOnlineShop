import React from "react";

function EditModal() {
  return (
    <div
      className="modal fixed inset-0 bg-black/50 z-50 transition-all flex items-center justify-center active"
      id="delete-modal"
    >
      <div className="bg-white w-auto md:w-[450px] p-8">
        <h2 className="text-3xl font-MorabbaBold text-center">
          اطلاعات جدید را وارد نمایید
        </h2>

        <form className="mt-10 flex items-center justify-center flex-col gap-5 child:rounded-sm">
          <div className="w-full">
            <div className="bg-gray-200 flex items-center gap-x-2 py-2 px-3 w-full">
              <svg className="w-6 h-6">
                <use href="#shop"></use>
              </svg>
              <input
                type="text"
                placeholder="نام جدید محصول را وارد کنید..."
                className="w-full text-sm md:text-base bg-transparent outline-none"
                name="title"
              />
            </div>
            <span className="absolute  text-red-600 font-DanaDemiBold"></span>
          </div>
          <div className="w-full">
            <div className="bg-gray-200 flex items-center gap-x-2 py-2 px-3 w-full">
              <svg className="w-6 h-6">
                <use href="#money"></use>
              </svg>
              <input
                type="text"
                placeholder="قیمت جدید محصول را وارد کنید..."
                className="w-full text-sm md:text-base bg-transparent outline-none"
                name="title"
              />
            </div>
            <span className="absolute  text-red-600 font-DanaDemiBold"></span>
          </div>
          <div className="w-full">
            <div className="bg-gray-200 flex items-center gap-x-2 py-2 px-3 w-full">
              <svg className="w-6 h-6">
                <use href="#gift"></use>
              </svg>
              <input
                type="text"
                placeholder="تخفیف جدید محصول را وارد کنید..."
                className="w-full text-sm md:text-base bg-transparent outline-none"
                name="title"
              />
            </div>
            <span className="absolute  text-red-600 font-DanaDemiBold"></span>
          </div>
          <div className="w-full">
            <div className="bg-gray-200 flex items-center gap-x-2 py-2 px-3 w-full">
              <svg className="w-6 h-6">
                <use href="#bell"></use>
              </svg>
              <input
                type="text"
                placeholder="تعداد جدید محصول را وارد کنید..."
                className="w-full text-sm md:text-base bg-transparent outline-none"
                name="title"
              />
            </div>
            <span className="absolute  text-red-600 font-DanaDemiBold"></span>
          </div>
          <div className="w-full">
            <div className="bg-gray-200 flex items-center gap-x-2 py-2 px-3 w-full">
              <svg className="w-6 h-6">
                <use href="#life-style"></use>
              </svg>
              <input
                type="text"
                placeholder="توضیحات جدید محصول را وارد کنید..."
                className="w-full text-sm md:text-base bg-transparent outline-none"
                name="title"
              />
            </div>
            <span className="absolute  text-red-600 font-DanaDemiBold"></span>
          </div>
          <div className="w-full">
            <div className="bg-gray-200 flex items-center gap-x-2 py-2 px-3 w-full">
              <svg className="w-6 h-6">
                <use href="#image"></use>
              </svg>
              <input type="file" accept="image/*" name="image" />
            </div>
            <span className="absolute  text-red-600 font-DanaDemiBold"></span>
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 text-white text-xl font-MorabbaBold py-3"
          >
            ویرایش اطلاعات
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
