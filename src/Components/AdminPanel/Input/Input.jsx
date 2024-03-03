import React from "react";

function Input({
  register,
  errors,
  icon,
  placeholder,
  type,
  name,
  isTextArea,
  value,
  className
}) {
  return isTextArea ? (
    <>
      <div className={`relative w-full ${className && className}`}>
        <div className="flex items-center justify-between bg-gray-100 relative py-2 px-3 rounded-lg">
          <textarea
            type={type}
            {...register(`${name}`)}
            placeholder={placeholder}
            defaultValue={value}
            className="outline-none w-full bg-gray-100 h-36 text-sm md:text-base"
          ></textarea>
        </div>
        {errors[name] && (
          <span className="absolute text-xs md:text-sm text-red-600 top-[42px] md:top-[170px] font-DanaDemiBold ">
            {errors[name].message}
          </span>
        )}
      </div>
      <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600 absolute top-2 left-2 md:top-4 md:left-4">
        <use href={`#${icon}`}></use>
      </svg>
    </>
  ) : (
    <div className="relative w-full">
      <div className="flex items-center justify-between bg-gray-100 py-2 px-3 rounded-lg">
        <input
          type={type}
          {...register(`${name}`)}
          placeholder={placeholder}
          className="outline-none w-full bg-gray-100"
          autoComplete="false"
          // defaultValue={value}
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
