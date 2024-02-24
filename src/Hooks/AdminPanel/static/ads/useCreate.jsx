import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { createNewAds } from "../../../../services/static";

function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewAds,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ads"] });
    },
  });
}

export default useCreate;
