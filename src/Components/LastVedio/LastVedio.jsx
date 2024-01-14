import React from "react";

function LastVedio() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="relative">
        <img
          src="/images/blog/blog-4.jpg"
          alt="blog-4.jpg"
          className="w-[100px] rounded-md"
        />
        <svg className="w-5 h-5 absolute icon">
          <use href="#play"></use>
        </svg>
      </div>
      <div>
        <h3 className="font-DanaDemiBold text-sm">
          آخرین پرچمداران گوشی شیائومی
        </h3>
        <div class="flex items-center justify-between mt-2">
          <span class="text-xs font-DanaDemiBold">9 مرداد 1402</span>
          <svg class="w-6 h-6 text-blue-600">
            <use href="#left-arrow"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LastVedio;
