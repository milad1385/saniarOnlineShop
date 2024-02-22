import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { createNewCategory } from "../../../services/categoryApi";

function useCreate() {
  const queryClinet = useQueryClient();
  return useMutation({
    mutationFn: createNewCategory,
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}

export default useCreate;
