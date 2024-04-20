import React from "react";
import MegaMenuValue from "../MegaMenuValue/MegaMenuValue";
import MegaMenuItem from "../MegaMenuItem/MegaMenuItem";

function MegaMenus() {
  const megaMenu = [
    { id: 1, title: "گوشی اپل", link: "" },
    { id: 2, title: "گوشی سامسونگ", link: "" },
    { id: 3, title: "گوشی هواوی", link: "" },
    { id: 4, title: "گوشی شیایومی", link: "" },
    { id: 5, title: "گوشی بلک بری", link: "" },
    { id: 6, title: "گوشی لنوو", link: "" },
  ];
  return (
    <div className="absolute flex z-50  opacity-0 invisible group-hover:opacity-100 w-[650px] md:w-[768px] lg:w-[1024px] xl:w-[1250px] xxl:w-[1440px] group-hover:visible transition-all bg-white shadow-lg rounded-br-md rounded-bl-md top-[65px]">
      <div className="bg-gray-300 rounded-br-md w-[300px]">
        <ul className="child:py-[12.5px] child:transition-all  child:px-2  child-hover:bg-blue-600 child-hover:text-white text-zinc-800 divide-y-[1px] divide-zinc-400">
          <MegaMenuItem title={"موبایل"} icon={"mobile"} link={""} />
          <MegaMenuItem title={"تبلت"} icon={"t-b"} link={""} />
          <MegaMenuItem title={"آنتی ویروس"} icon={"check"} link={""} />
          <MegaMenuItem title={"لپ تاپ"} icon={"sample"} link={""} />
          <MegaMenuItem title={"پرفروش"} icon={"tag"} link={""} />
          <MegaMenuItem
            title={"جشنواره های تخفیف"}
            icon={"presell"}
            link={""}
          />
          <MegaMenuItem title={"ملزومات عکاسی"} icon={"camera"} link={""} />
          <MegaMenuItem title={"کیف و کفش"} icon={"bag"} link={""} />
        </ul>
      </div>
      <div className="bg-white text-zinc-800 py-4 px-4">
        <ul className="flex items-center flex-wrap gap-8">
          <MegaMenuValue items={megaMenu} name={"برند های مختلف گوشی"} />
          <MegaMenuValue items={megaMenu} name={"برند های مختلف گوشی"} />
          <MegaMenuValue items={megaMenu} name={"برند های مختلف گوشی"} />
          <MegaMenuValue items={megaMenu} name={"برند های مختلف گوشی"} />
          <MegaMenuValue items={megaMenu} name={"برند های مختلف گوشی"} />
          <MegaMenuValue items={megaMenu} name={"برند های مختلف گوشی"} />
          <MegaMenuValue items={megaMenu} name={"برند های مختلف گوشی"} />
          <MegaMenuValue items={megaMenu} name={"برند های مختلف گوشی"} />
        </ul>
      </div>
    </div>
  );
}

export default MegaMenus;
