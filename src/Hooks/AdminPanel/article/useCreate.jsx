import { useMutation, useQueryClient } from "react-query";
import { createNewArticle } from "../../../services/article";

function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}

export default useCreate;
