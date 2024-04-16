import { useMutation, useQueryClient } from "react-query";
import { deleteWishList } from "../../services/wish";
function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteWishList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["isExist"] });
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      queryClient.invalidateQueries({ queryKey: ["best-seller"] });
    },
  });
}

export default useCreate;
