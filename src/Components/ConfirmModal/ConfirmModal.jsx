import React, { useEffect } from "react";
import Sppiner from "../../Components/Sppiner/Spinner";
function ConfirmModal({
  title,
  onConfirm,
  onClose,
  isConfirming,
  disable,
  onInfo,
}) {
  useEffect(() => {
    onInfo?.({
      onClose: onClose,
    });
  }, []);
  return (
    <div className="bg-white w-[400px]  py-8 px-3">
      <h3 className="font-MorabbaBold text-2xl text-center">
        {title ? title : "آیا از حذف کردن اطمینان دارید ؟"}
      </h3>
      <div className="flex items-center justify-center gap-x-5 mt-8">
        <button
          className="bg-blue-600 text-white font-MorabbaBold px-16 py-4 text-xl h-[60px]"
          onClick={onConfirm}
          disabled={disable}
        >
          {isConfirming ? (
            <div className="mr-2.5 mb-4">
              <Sppiner />
            </div>
          ) : (
            "بله"
          )}
        </button>
        <button
          className="bg-gray-600 text-white font-MorabbaBold px-16 py-4 text-xl h-[60px]"
          onClick={onClose}
          disabled={disable}
        >
          خیر
        </button>
      </div>
    </div>
  );
}

export default ConfirmModal;
