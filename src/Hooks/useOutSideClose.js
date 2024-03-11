import React, { useEffect, useRef } from "react";

function useOutSideClose(handler, isCapturing) {
  const ref = useRef();
  useEffect(() => {
    const hideHandler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    const hideHandlerByEsc = async (e) => {
      if (e.keyCode === 27) {
        handler();
      }
    };

    document.addEventListener("click", hideHandler, isCapturing);
    document.addEventListener("keyup", hideHandlerByEsc);

    return () => {
      document.removeEventListener("click", hideHandler, isCapturing);
      document.removeEventListener("click", hideHandlerByEsc, isCapturing);
    };
  }, []);

  return ref;
}

export default useOutSideClose;
