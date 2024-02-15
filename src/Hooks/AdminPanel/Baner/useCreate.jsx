import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { createNewBaner } from "../../../services/banerApi";

function useCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNewBaner,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["baners"] });
    },
  });
}

export default useCreate;
