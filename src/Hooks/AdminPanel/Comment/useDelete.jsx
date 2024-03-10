import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteComment } from "../../../services/comment";

function useDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
}

export default useDelete;
