import { useMutation, useQueryClient } from "react-query";
import { deleteDiscountCode } from "../../../services/discount";
function useDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteDiscountCode,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discounts"] });
    },
  });
}

export default useDelete;
