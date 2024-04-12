import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { activeToggle } from "../../../services/ticket";
function useActiveToggle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: activeToggle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allTickets"] });
    },
  });
}

export default useActiveToggle;
