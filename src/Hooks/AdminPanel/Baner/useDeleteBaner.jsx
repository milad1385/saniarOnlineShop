import { useMutation, useQueryClient } from "react-query";
import { deleteBaner } from "../../../services/banerApi";

function useDeleteBaner() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBaner,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["baners"] });
    },
  });
}

export default useDeleteBaner;
