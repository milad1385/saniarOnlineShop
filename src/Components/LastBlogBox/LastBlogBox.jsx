import React from "react";

function LastBlogBox() {
  return (
    <div className="flex items-center gap-x-4">
      <div>
        <img
          src="/images/blog/blog-4.jpg"
          alt="blog-4.jpg"
          className="w-[100px] rounded-md"
        />
      </div>
      <div>
        <h3 className="font-DanaDemiBold text-sm">
          آخرین پرچمداران گوشی شیائومی
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs font-DanaDemiBold">9 مرداد 1402</span>
          <svg className="w-6 h-6 text-blue-600">
            <use href="#left-arrow"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LastBlogBox;
