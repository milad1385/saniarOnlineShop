import React from "react";
import { useMutation } from "react-query";
import { sendPhoneOtpLogin } from "../../services/userApi";

function useOtp() {
  return useMutation({
    mutationFn: sendPhoneOtpLogin,
  });
}

export default useOtp;
