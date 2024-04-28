import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { acceptOrder } from "../../services/order";

function useAccept() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: acceptOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(["all-orders"]);
    },
  });
}

export default useAccept;
