import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { createNewProduct } from "../../../services/product";

function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export default useCreate;
