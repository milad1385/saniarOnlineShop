import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { changeUserRole } from "../../../services/userApi";

function useRole() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changeUserRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

export default useRole;
