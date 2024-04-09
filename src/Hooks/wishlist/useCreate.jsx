import { useMutation, useQueryClient } from "react-query";
import { addToWishList } from "../../services/wish";
function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addToWishList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["isExist"] });
    },
  });
}

export default useCreate;
