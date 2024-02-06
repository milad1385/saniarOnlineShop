import React, { useEffect } from "react";

function StatusModal({ onClose, title, onClick, text , icon , color , bg }) {
  useEffect(() => {
    const hideModal = (event) => {
      if (event.target.id === "success-modal") {
        onClose(false);
      }
    };

    document.addEventListener("click", hideModal);

    return () => document.removeEventListener("click", hideModal);
  }, []);
  return (
    <div
      id="success-modal"
      className="bg-black/50 fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-white w-[93%] md:w-[400px] pb-8 pt-4 px-3">
        <div>
          <svg className={`w-20 h-20 md:w-24 md:h-24 ${color}  mx-auto`}>
            <use href={`#${icon}`}></use>
          </svg>
        </div>
        <h3 className="font-MorabbaBold text-lg md:text-2xl text-center mt-3">
          {title}
        </h3>
        <div className="flex items-center justify-center gap-x-5 mt-8">
          <button
            className={`${bg}  text-white font-MorabbaBold px-16 py-4 text-lg md:text-xl`}
            onClick={onClick}
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StatusModal;
