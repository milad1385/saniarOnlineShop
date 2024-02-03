import React from "react";

function Footer() {
  return (
    <div className="bg-blue-600 text-white  md:hidden h-28 flex items-center justify-center mt-10">
      <div class="flex items-center gap-x-2.5">
        <div class="flex-center shrink-0 w-[30px] h-[30px] border border-zinc-300 rounded-full">
          <div class="flex-center w-5 h-5 border border-zinc-300 rounded-full">
          <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
          </div>
        </div>
        <p class="text-white font-Lalezar text-lg">
          تمام حقوق این پنل ، متعلق به میلاد شاپ میباشد 
        </p>
      </div>
    </div>
  );
}

export default Footer;
