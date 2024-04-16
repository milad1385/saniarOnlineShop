import { useMutation, useQueryClient } from "react-query";
import { increaseItem } from "../../services/basket";

function useInc() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: increaseItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["main-basket"] });
    },
  });
}

export default useInc;
