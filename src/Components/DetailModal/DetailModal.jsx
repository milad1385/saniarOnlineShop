import React, { useEffect } from "react";

function DetailModal({ children, onClose }) {
  useEffect(() => {
    const hideModal = (event) => {
      if (event.target.id === "detail-modal") {
        onClose(false);
      }
    };

    document.addEventListener("click", hideModal);

    return () => document.removeEventListener("click", hideModal);
  }, []);
  return (
    <div
      id="detail-modal"
      className="fixed inset-0 bg-black/50 z-50 transition-all flex items-center justify-center"
    >
      <div className=" table-container ">{children}</div>
    </div>
  );
}

export default DetailModal;
