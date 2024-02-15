import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { editBaner } from "../../../services/banerApi";

function useEditBaner() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editBaner,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["baners"] });
    },
  });
}

export default useEditBaner;
