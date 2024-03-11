import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "../../../services/userApi";

function useDelete(setSuccessInfo) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["lastestUser"] });
      setSuccessInfo({
        title: "کاربر با موفقیت حذف شد",
      });
    },
  });
}

export default useDelete;
