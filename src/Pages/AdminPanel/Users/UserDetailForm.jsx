import React from "react";

function UserDetailForm({ detail }) {
  return (
    <div className="bg-white px-5   space-y-5 font-MorabbaBold">
      <table className="user-table mt-7">
        <thead className="">
          <tr className="child:font-Lalezar text-base md:text-xl bg-gray-600 child:p-3 text-center">
            <td>ایمیل</td>
            <td>رمز عبور</td>
            <td>شهر</td>
          </tr>
        </thead>
        <tbody className="text-sm md:text-base">
          <tr className="child:p-4 text-center font-DanaMedium">
            <td>{detail.email}</td>
            <td>{detail.password}</td>
            <td>کرج</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserDetailForm;
