import { useMutation, useQueryClient } from "react-query";
import { createNewDiscountCode } from "../../../services/discount";
function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewDiscountCode,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discounts"] });
    },
  });
}

export default useCreate;
