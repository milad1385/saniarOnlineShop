import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { addToBasket } from "../../services/basket";
function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addToBasket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["main-basket"] });
      queryClient.invalidateQueries({ queryKey: ["user-basket"] });
    },
  });
}

export default useCreate;
