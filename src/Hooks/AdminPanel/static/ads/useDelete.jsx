

import { useMutation, useQueryClient } from "react-query";
import { deleteAds } from "../../../../services/static";

function useDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAds,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ads"] });
    },
  });
}

export default useDelete;
