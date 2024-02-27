import { useMutation, useQueryClient } from "react-query";
import { createNewColor } from "../../../services/color";

function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewColor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["color-list"] });
    },
  });
}

export default useCreate;
