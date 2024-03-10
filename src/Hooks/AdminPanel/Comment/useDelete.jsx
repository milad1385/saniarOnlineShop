import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteComment } from "../../../services/comment";

function useDelete(setSuccessInfo) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      setSuccessInfo({
        title: "کامنت با موفقیت حذف شد",
      });
    },
  });
}

export default useDelete;
