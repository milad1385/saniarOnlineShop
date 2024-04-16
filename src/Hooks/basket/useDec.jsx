import { useMutation, useQueryClient } from "react-query";
import { decreaseItem } from "../../services/basket";

function useDec() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: decreaseItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["main-basket"] });
      queryClient.invalidateQueries({ queryKey: ["user-basket"] });
    },
  });
}

export default useDec;
