import React, { useEffect } from "react";

function DetailModal({ children, onClose }) {
  useEffect(() => {
    const hideModal = (event) => {
      if (event.target.id === "detail-modal") {
        onClose(false);
      }
    };

    const hideModalByKeyBoard = (e) => {
      if (e.code === "Escape") {
        onClose(false);
      }
    };

    document.addEventListener("click", hideModal);
    document.addEventListener("keyup", hideModalByKeyBoard);

    return () => {
      document.removeEventListener("click", hideModal);
      document.removeEventListener("keyup", hideModalByKeyBoard);
    };
  }, []);
  return (
    <div
      id="detail-modal"
      className="fixed inset-0 bg-black/50 z-50 transition-all flex items-center justify-center"
    >
      <div className="table-container w-[94%] md:w-auto">{children}</div>
    </div>
  );
}

export default DetailModal;
