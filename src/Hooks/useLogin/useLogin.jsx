import React from "react";
import { useMutation } from "react-query";
import { handleLoginUser } from "../../services/userApi";

function useLogin() {
  return useMutation({
    mutationFn: handleLoginUser,
  });
}

export default useLogin;
