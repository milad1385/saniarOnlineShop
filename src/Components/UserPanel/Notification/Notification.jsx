import React from "react";

function Notification() {
  return (
    <div className="bg-amber-200 p-3 rounded-md">
      <div className="flex items-center justify-between">
        <h3 className="font-DanaDemiBold text-lg">عنوان اطلاعیه</h3>
        <h3 className="text-sm text-gray-600">8 آبان 1402</h3>
      </div>
      <p className="text-gray-600 mt-2">
        دوره آموزش 100 ساعته ری اکت جی اس با بهترین متد های آموزشی در این سایت
        پیدا کنید ، دوره آموزش 100 ساعته ری اکت جی اس با بهترین متد های آموزشی
        در این سایت پیدا کنید
      </p>
    </div>
  );
}

export default Notification;
