import React from "react";
function ColorBox({
  colorName,
  colorCode,
  colorChoose,
  setColorChoose,
  setCode,
}) {
  return (
    <div
      className={`flex items-center gap-x-2 bg-gray-200 px-2 py-1 rounded-full cursor-default md:cursor-pointer ${
        colorChoose === colorName ? "border-2 border-blue-600" : ""
      }`}
      onClick={(e) => {
        setColorChoose(colorName);
        setCode(colorCode);
      }}
    >
      <div
        className="w-5 h-5 rounded-full flex-center"
        style={{ backgroundColor: colorCode }}
      >
        {colorChoose === colorName && (
          <svg className="w-4 h-4 text-white">
            <use href="#ok"></use>
          </svg>
        )}
      </div>
      <span>{colorName}</span>
    </div>
  );
}

export default ColorBox;
