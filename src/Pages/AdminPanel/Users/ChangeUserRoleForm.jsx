import React, { useState } from "react";
import useRole from "../../../Hooks/AdminPanel/User/useRole";

function ChangeUserRoleForm({ user, onClose, onInfo }) {
  const [role, setRole] = useState(user.role);

  const { mutateAsync: changeUserRole, isLoading: isChanging } = useRole(
    onClose,
    onInfo
  );

  const changeUserRoleHandler = async () => {
    const info = {
      id: user._id,
      role,
    };

    await changeUserRole(info);
  };

  return (
    <div className="bg-white w-[350px] px-5 pt-4 pb-6 space-y-5 font-MorabbaBold">
      <h3 className="text-center  text-lg md:text-2xl lg:text-3xl">
        نقش جدید را وارد کنید
      </h3>
      <div className="flex items-center justify-between bg-gray-100 py-2 px-3">
        <input
          type="text"
          placeholder="نقش کاربر را وارد کنید ..."
          className="outline-none w-full bg-gray-100 font-DanaMedium"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <svg className="w-6 h-6 md:w-9 md:h-9 text-zinc-600">
          <use href="#user"></use>
        </svg>
      </div>
      <button
        className="bg-blue-600 text-white flex-center w-full py-3 text-base md:text-lg lg:text-xl"
        onClick={changeUserRoleHandler}
      >
        {isChanging ? "در حال ویرایش نقش" : "ویرایش نقش"}
      </button>
    </div>
  );
}

export default ChangeUserRoleForm;
