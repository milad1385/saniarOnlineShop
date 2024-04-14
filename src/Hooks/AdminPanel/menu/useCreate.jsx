import { useMutation, useQueryClient } from "react-query";
import { createMenu } from "../../../services/menu";
function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMenu,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menus"] });
    },
  });
}

export default useCreate;
