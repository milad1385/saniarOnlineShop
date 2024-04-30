import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Menu({ title, icon, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const subMenuRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      const height = subMenuRef.current.scrollHeight;
      subMenuRef.current.style.height = height + "px";
    } else {
      subMenuRef.current.style.height = 0 + "px";
    }
  }, [isOpen]);
  return (
    <div>
      <div
        className="flex items-center justify-between  w-full"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-x-2  w-full py-[0.375rem] px-[0.5rem]">
          <svg className="w-6 h-6">
            <use href={`#${icon}`}></use>
          </svg>
          <span className="mt-1">{title}</span>
        </div>
        <svg className={`w-5 h-5 ${isOpen ? "rotate-180" : ""} transition-all`}>
          <use href={`#chevron-down`}></use>
        </svg>
      </div>
      <ul
        className={`submenu mr-[2px]  space-y-1 !bg-white text-blue-600 rounded-md`}
        ref={subMenuRef}
      >
        {items.map((item) => (
          <li>
            <NavLink
              to={`/admin-panel/${item.link}`}
              className="flex items-center gap-x-2 cursor-pointer w-full"
            >
              <svg className="w-5 h-5">
                <use href={`#${item.icon}`}></use>
              </svg>
              <span className="text-base">{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
