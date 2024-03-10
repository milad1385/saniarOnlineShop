import React, { useEffect, useRef } from "react";

function useOutSideClose(handler, isCapturing) {
  const ref = useRef();
  useEffect(() => {
    const hideHandler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", hideHandler, isCapturing);

    return () =>
      document.removeEventListener("click", hideHandler, isCapturing);
  }, []);

  return ref;
}

export default useOutSideClose;
