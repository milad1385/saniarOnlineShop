import React from "react";
import { useMutation } from "react-query";
import { verifyOtpCode } from "../../services/userApi";

function useVerfiy() {
  return useMutation({
    mutationFn: verifyOtpCode,
  });
}

export default useVerfiy;
