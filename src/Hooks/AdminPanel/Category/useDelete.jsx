import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteCategory } from "../../../services/categoryApi";

function useDelete() {
  const queryClinet = useQueryClient();
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}

export default useDelete;
