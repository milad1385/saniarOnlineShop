import React from "react";

function Input({register , errors , icon , placeholder , type , name}) {
    console.log(name);
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
        <input
          type={type}
          {...register(`${name}`)}
          placeholder={placeholder}
          className="outline-none w-full bg-gray-100"
        />
        <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
          <use href={`#${icon}`}></use>
        </svg>
      </div>
      {errors[name] && (
        <span className="absolute text-xs md:text-sm text-red-600 top-[42px] md:top-[54px] font-DanaDemiBold ">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}

export default Input;
