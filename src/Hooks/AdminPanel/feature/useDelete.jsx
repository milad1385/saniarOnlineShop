import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteFeature } from "../../../services/feature";

function useDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteFeature,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["features"] });
    },
  });
}

export default useDelete;
