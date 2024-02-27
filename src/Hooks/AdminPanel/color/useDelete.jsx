import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteColor } from "../../../services/color";

function useDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteColor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["color-list"] });
    },
  });
}

export default useDelete;
