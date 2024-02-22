import { useMutation, useQueryClient } from "react-query";
import { updateCategory } from "../../../services/categoryApi";

function useEdit() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}

export default useEdit;
