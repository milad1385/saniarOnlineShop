import { useMutation, useQueryClient } from "react-query";
import { decreaseItem } from "../../services/basket";

function useDec() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: decreaseItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["main-basket"] });
    },
  });
}

export default useDec;
