import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "../../../services/userApi";

function useDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({queryKey : ["lastestUser"]})
    },
  });
}

export default useDelete;
