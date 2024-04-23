import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { createOrder } from "../../services/order";

function useOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}

export default useOrder;
