import React from "react";

function ChangeTextFooter() {
  return (
    <div className="bg-white pt-3 pb-6 px-6 rounded-md shadow font-Dana text-zinc-700">
      <h3 className="font-Lalezar text-xl md:text-2xl mb-6">
        تغییر متن <span className="text-blue-600">فوتر</span>
      </h3>
      <div className="flex items-center justify-between bg-gray-100 relative py-2 px-3 rounded-lg">
        <textarea
          type="text"
          placeholder="متن جدید فوتر را بنویسید ...."
          className="outline-none w-full bg-gray-100 h-36 text-sm md:text-base"
        ></textarea>
        <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600 absolute top-2 left-2 md:top-4 md:left-4">
          <use href="#square"></use>
        </svg>
      </div>
      <button className="bg-blue-600  font-Lalezar p-2 rounded-md text-white text-sm md:text-xl shadow-blue mt-6">
        تغییر متن فوتر
      </button>
    </div>
  );
}

export default ChangeTextFooter;
