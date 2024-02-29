import { useMutation, useQueryClient } from "react-query";
import { createNewFeature } from "../../../services/feature";

function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewFeature,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["features"] });
    },
  });
}

export default useCreate;
