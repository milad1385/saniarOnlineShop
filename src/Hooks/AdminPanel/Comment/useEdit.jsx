import { useMutation, useQueryClient } from "react-query";
import { editCommentBody } from "../../../services/comment";

function useEdit(closeHandler) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ body, id }) => editCommentBody(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
}

export default useEdit;
