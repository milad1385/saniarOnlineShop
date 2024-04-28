import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { handOverOrder } from "../../services/order";

function useHandover() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: handOverOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(["all-orders"]);
    },
  });
}

export default useHandover;
