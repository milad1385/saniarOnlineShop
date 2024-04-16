import { useMutation, useQueryClient } from "react-query";
import { increaseItem } from "../../services/basket";

function useInc() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: increaseItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["main-basket"] });
      queryClient.invalidateQueries({ queryKey: ["user-basket"] });
    },
  });
}

export default useInc;
