import { useMutation, useQueryClient } from "react-query";
import { deleteProduct } from "../../../services/product";

function useDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export default useDelete;
