import React, { useEffect } from "react";
import Sppiner from "../../Components/Sppiner/Spinner";
function DeleteModal({ onClose, title, onClick, isLoading }) {
  useEffect(() => {
    const hideModal = (event) => {
      if (event.target.id === "delete-modal") {
        onClose(false);
      }
    };

    document.addEventListener("click", hideModal);

    return () => document.removeEventListener("click", hideModal);
  }, []);
  return (
    <div
      id="delete-modal"
      className="bg-black/50 fixed inset-0  flex items-center justify-center  z-50"
    >
      <div className="bg-white w-[350px] md:w-[400px]  py-6 md:py-8 px-3">
        <h3 className="font-MorabbaBold text-xl md:text-2xl text-center">
          {title ? title : "آیا از حذف کردن اطمینان دارید ؟"}
        </h3>
        <div className="flex items-center justify-center gap-x-5 mt-8">
          <button
            className="bg-blue-600 w-[54px] md:w-auto text-white font-MorabbaBold px-16 py-4 text-lg md:text-xl h-[49px] flex-center md:h-[60px]"
            onClick={onClick}
          >
            {isLoading ? (
              <div className="mr-2.5 mb-4">
                <Sppiner />
              </div>
            ) : (
              "بله"
            )}
          </button>
          <button
            className="bg-gray-600 w-[54px] md:w-auto text-white font-MorabbaBold px-16 py-4 text-lg md:text-xl h-[49px] flex-center md:h-[60px]"
            onClick={() => onClose(false)}
          >
            خیر
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
