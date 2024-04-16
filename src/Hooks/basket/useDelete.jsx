import { useMutation, useQueryClient } from "react-query";
import { deleteBasketItem } from "../../services/basket";

function useDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBasketItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["main-basket"] });
      queryClient.invalidateQueries({ queryKey: ["user-basket"] });
    },
  });
}

export default useDelete;
