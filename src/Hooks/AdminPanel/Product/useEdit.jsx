import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { editProduct } from "../../../services/product";

function useEdit() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export default useEdit;
