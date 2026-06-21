import React, { useEffect, useState } from "react";

function CountDownTimer() {
  const [timeLeft, setTimeLeft] = useState(104400);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(104400);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;
  return (
    <div className="flex items-center gap-x-2.5">
      {/* نمایش روز */}
      <div className="flex items-center flex-col">
        <div className="bg-red-500 text-white rounded-md w-8 h-8 flex items-center justify-center text-sm font-DanaDemiBold">
          {String(days).padStart(2, "0")}
        </div>
        <span className="text-xs font-DanaDemiBold mt-2">روز</span>
      </div>
      {/* نمایش ساعت */}
      <div className="flex items-center flex-col">
        <div className="bg-gray-200 text-black rounded-md w-8 h-8 flex items-center justify-center text-sm font-DanaDemiBold">
          {String(hours).padStart(2, "0")}
        </div>
        <span className="text-xs font-DanaDemiBold mt-2">ساعت</span>
      </div>
      {/* نمایش دقیقه */}
      <div className="flex items-center flex-col">
        <div className="bg-gray-200 text-black rounded-md w-8 h-8 flex items-center justify-center text-sm font-DanaDemiBold">
          {String(minutes).padStart(2, "0")}
        </div>
        <span className="text-xs font-DanaDemiBold mt-2">دقیقه</span>
      </div>
      {/* نمایش ثانیه */}
      <div className="flex items-center flex-col">
        <div className="bg-gray-200 text-black rounded-md w-8 h-8 flex items-center justify-center text-sm font-DanaDemiBold">
          {String(seconds).padStart(2, "0")}
        </div>
        <span className="text-xs font-DanaDemiBold mt-2">ثانیه</span>
      </div>
    </div>
  );
}

export default CountDownTimer;
