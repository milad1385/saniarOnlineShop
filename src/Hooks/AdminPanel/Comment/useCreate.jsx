import { useMutation, useQueryClient } from "react-query";
import { createNewComment } from "../../../services/comment";

function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
}

export default useCreate;
