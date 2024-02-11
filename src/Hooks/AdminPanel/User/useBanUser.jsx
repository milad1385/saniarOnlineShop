import React from "react";
import { useMutation } from "react-query";
import { banUser } from "../../../services/userApi";

function useBanUser() {
  return useMutation({
    mutationFn: banUser,
  });
}

export default useBanUser;
